import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
// import { MapDistrictSelectorService } from '../../map-district-selector.service';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { ECharts } from 'echarts';
import * as echarts from 'echarts';
import { zip, fromEvent } from 'rxjs';
import { MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN } from '../../map-district-selector.token';

@Component({
  selector: 'mds-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @ViewChild('mapChart') mapChart: ElementRef;
  chart: ECharts;
  options: any = {
    title: {
      text: '全国34个省市自治区',
      subtext: '中国'
    },
    series: [
      {
        type: 'map',
        map: 'China',
        roam: true,
        zoom: 1.2,
        nameMap: {
          China: '中国'
        },
        nameProperty: 'name',
        selectedMode: 'single',
        label: {
          show: true,
          color: 'white',
          position: 'inside'
        },
        itemStyle: {
          areaColor: '#AAD5FF',
          borderColor: 'white',
          emphasis: {
            areaColor: '#A5DABB'
          }
        },
      }
    ]
  };
  constructor(
    @Inject(MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN) private closeFn: () => void,
    private readJson: ReadJsonService,
  ) { }

  ngOnInit(): void {
    this.ininMap();
  }

  ininMap(): void {
    this.readJson.readJson('china')
      .subscribe(ChinaJson => {
        echarts.registerMap('China', ChinaJson);
        this.options.series[0].data = this.fmtGeoData(ChinaJson);
        this.chart = echarts.init(this.mapChart.nativeElement);
        this.chart.setOption(this.options);
        this.bindMapSelectChangedEvent();
      });
  }

  fmtGeoData(data): any {
    return data.features.map(g => g.properties);
  }

  bindMapSelectChangedEvent(): void {
    fromEvent(this.chart, 'mapselectchanged').subscribe((param: any) => {
      console.log(param);

      const selectData = this.options.series[0].data.find(v => v.name === param.batch[0].name);
      console.log(selectData);
      if (!selectData?.adcode) {
        return;
      }
      this.readJson.readJson(`${selectData.level}/${selectData.adcode}`).subscribe(e => {
        echarts.registerMap(selectData.name, e);
        this.options.series[0].data = this.fmtGeoData(e);
        this.options.series[0].map = selectData.name;
        this.options.title.subtext = selectData.name === 'China' ? '中国' : selectData.name;
        this.chart.setOption(this.options, true);
      });
    });
  }

  back(): void {
    this.options.series[0].map = 'China';
    this.options.title.subtext = '中国';
    this.ininMap();
  }

  close(): void {
    this.closeFn();
  }

}
