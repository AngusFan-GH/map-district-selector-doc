import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit, OnDestroy } from '@angular/core';
// import { MapDistrictSelectorService } from '../../map-district-selector.service';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { ECharts, EChartOption, EChartTitleOption } from 'echarts';
import * as echarts from 'echarts';
import { fromEvent, Subject, zip } from 'rxjs';
import { MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN } from '../../map-district-selector.token';
import { GeoDataType } from '../../map-district-selector.types';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'mds-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapChart') mapChart: ElementRef;
  chartInit$ = new Subject<boolean>();
  loading = true;
  chart: ECharts;
  title = '';
  mapLevel = 0;
  cityList: any[] = [];
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
    zip(
      this.chartInit$.pipe(tap(() => this.initChart())),
      this.readJson.readJson('china')
    ).subscribe(([_, ChinaJson]) => {
      this.loading = false;
      this.renderChina(ChinaJson);
    });
  }

  ngAfterViewInit(): void {
    this.chartInit$.next(true);
  }

  private initChart(): void {
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
    fromEvent(this.chart, 'mapselectchanged')
      .subscribe((param: any) => {
        console.log(param);
        console.log((this.options as EChartOption).series[0].data);

        const selectData = ((this.options as EChartOption).series[0].data as EChartOption.SeriesMap.DataObject[])
          .find((v) => v.name === param.batch[0].name) as GeoDataType;
        console.log(selectData);
        const { level, adcode, name } = selectData;
        if (level === 'province') {
          this.mapLevel = 1;
          this.readJson.readJson(`${level}/${adcode}`).subscribe(e => {
            console.log(e);
            const cityList = e.features.map(({ properties }: any) => {
              return {
                name: properties.name,
                observable: this.readJson.readJson(`${properties.level}/${properties.adcode}`)
              };
            });
            zip(...cityList.map(({ observable }) => observable)).pipe(
              map(cities => cities.map(({ features }, i) => {
                return {
                  parent: cityList[i].name,
                  children: features.map(({ properties }) => properties)
                };
              }))
            ).subscribe(list => {
              this.cityList = list;
            });
            echarts.registerMap(name, e);
            this.options.series[0].data = this.fmtGeoData(e);
            this.title = name;
            (this.options.series[0] as EChartOption.SeriesMap).map = name;
            this.chart.setOption(this.options, true);
          });
        }
      });
  }

  hoverCity(city): void {
    console.log(city);
    this.chart.dispatchAction({
      type: 'mapSelect',
      name: city.parent
    });
  }

  leaveDistrict(): void {
    console.log('leave');
  }

  chooseDistrict(district): void {
    console.log(district);
  }

  back(): void {
    this.title = '';
    this.mapLevel = 0;
    this.readJson.readJson('china').subscribe(ChinaJson => this.renderChina(ChinaJson));
  }

  close(): void {
    this.closeFn();
  }

  ngOnDestroy(): void {
    this.chartInit$.complete();
  }
}
