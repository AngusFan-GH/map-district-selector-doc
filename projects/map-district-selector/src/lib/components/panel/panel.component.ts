import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapDistrictSelectorService } from '../../map-district-selector.service';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { ECharts } from 'echarts';
import * as echarts from 'echarts';
import { zip, fromEvent } from 'rxjs';

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
        mapType: 'China',
        selectedMode: 'single',
        itemStyle: {
          normal: {
            areaColor: '#AAD5FF',
            borderColor: 'white',
            label: { show: true, color: 'white' }
          },
          emphasis: {
            areaColor: '#A5DABB'
          }
        },
      }
    ]
  };
  constructor(
    private helper: MapDistrictSelectorService,
    private readJson: ReadJsonService,
  ) { }

  ngOnInit(): void {
    this.readJson.getJsonFromApi('https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json')
      .subscribe(ChinaJson => {
        console.log(ChinaJson);

        echarts.registerMap('China', ChinaJson);
        this.options.series[0].data = ChinaJson;
        this.chart = echarts.init(this.mapChart.nativeElement);
        this.chart.setOption(this.options);
        this.bindMapSelectChangedEvent();
      });
  }

  bindMapSelectChangedEvent(): void {
    fromEvent(this.chart, 'mapselectchanged').subscribe((param: any) => {
      const selectedName = param.batch[0].name;
      this.readJson.readJson(selectedName).subscribe(e => {
        echarts.registerMap(selectedName, e);
        this.options.series[0].mapType = selectedName;
        this.options.title.subtext = selectedName === 'China' ? '中国' : selectedName;
        this.chart.setOption(this.options, true);
      });
    });
  }

  back(): void {
    this.options.series[0].mapType = 'China';
    this.options.title.subtext = '中国';
    this.chart.setOption(this.options, true);
  }

  close(): void {
    this.helper.close();
  }

}
