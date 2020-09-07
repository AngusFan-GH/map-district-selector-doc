import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit, OnDestroy } from '@angular/core';
// import { MapDistrictSelectorService } from '../../map-district-selector.service';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { ECharts, EChartOption, EChartTitleOption } from 'echarts';
import * as echarts from 'echarts';
import { fromEvent, Subject, zip } from 'rxjs';
import { MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN } from '../../map-district-selector.token';
import { GeoDataType } from '../../map-district-selector.types';

@Component({
  selector: 'mds-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapChart') mapChart: ElementRef;
  chartInit$ = new Subject<boolean>();
  chart: ECharts;
  title = '';
  options: any = {
    series: [
      {
        type: 'map',
        map: 'China',
        roam: true,
        zoom: 1.2,
        nameMap: {
          China: '中国'
        },
        selectedMode: 'single',
        label: {
          show: true,
          color: 'white',
          position: 'inside'
        },
        itemStyle: {
          areaColor: {
            color: '#AAD5FF',
            borderColor: 'white',
          },
          emphasis: {
            areaColor: '#A5DABB'
          }
        }
      },
    ]
  };
  constructor(
    @Inject(MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN) private closeFn: () => void,
    private readJson: ReadJsonService,
  ) { }

  ngOnInit(): void {
    this.chartInit$.subscribe(() => this.init());
    zip(this.chartInit$, this.readJson.readJson('china')).subscribe(([_, ChinaJson]) => {
      this.renderChina(ChinaJson);
    });
  }

  ngAfterViewInit(): void {
    this.chartInit$.next(true);
  }

  private init(): void {
    this.chart = echarts.init(this.mapChart.nativeElement);
    this.bindMapSelectChangedEvent();
  }


  private renderChina(ChinaJson): void {
    echarts.registerMap('China', ChinaJson);
    (this.options.series[0] as EChartOption.SeriesMap).map = 'China';
    this.options.series[0].data = this.fmtGeoData(ChinaJson);
    this.chart.setOption(this.options);
  }

  private fmtGeoData(data): any {
    return data.features.map(g => g.properties);
  }

  private bindMapSelectChangedEvent(): void {
    fromEvent(this.chart, 'mapselectchanged').subscribe((param: any) => {
      const selectData = ((this.options.series[0] as EChartOption.SeriesMap
      ).data as EChartOption.SeriesMap.DataObject[]
      ).find((v) => v.name === param.batch[0].name) as GeoDataType;
      console.log(selectData);
      const { level, adcode, name } = selectData;
      if (level === 'province') {
        this.readJson.readJson(`${level}/${adcode}`).subscribe(e => {
          console.log(e);
          echarts.registerMap(name, e);
          this.options.series[0].data = this.fmtGeoData(e);
          this.title = name;
          (this.options.series[0] as EChartOption.SeriesMap).map = name;
          this.chart.setOption(this.options, true);
        });
      }
    });
  }

  back(): void {
    this.title = '';
    this.readJson.readJson('china').subscribe(ChinaJson => this.renderChina(ChinaJson));
  }

  close(): void {
    this.closeFn();
  }

  ngOnDestroy(): void {
    this.chartInit$.complete();
  }
}
