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
        },
      },
    ]
  };
  result: {
    province: {
      name?: string,
      adcode?: number,
      center?: number[]
    },
    city: {
      name?: string,
      adcode?: number,
      center?: number[]
    },
    district: {
      name?: string,
      adcode?: number,
      center?: number[]
    }
  } = {
      province: {},
      city: {},
      district: {}
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
    this.chart.clear();
    this.chart.resize({
      width: 860,
    });
    echarts.registerMap('China', ChinaJson);
    (this.options.series[0] as EChartOption.SeriesMap).map = 'China';
    console.log('ChinaJson', ChinaJson);

    this.options.series[0].data = this.fmtGeoData(ChinaJson);
    this.options.series[0].center = null;
    this.chart.setOption(this.options);
    this.loading = false;
  }

  private fmtGeoData(data): any {
    return data.features.map(g => g.properties);
  }

  private bindMapSelectChangedEvent(): void {
    fromEvent(this.chart, 'mapselectchanged')
      .subscribe((param: any) => {
        const selectData = ((this.options as EChartOption).series[0].data as EChartOption.SeriesMap.DataObject[])
          .find((v) => v.name === param.batch[0].name) as GeoDataType;
        console.log(selectData);

        const { level, adcode, name, center, childrenNum } = selectData;
        if (!childrenNum) {
          this.result[level] = {
            adcode,
            name,
            center
          };
          this.close();
          return;
        }
        if (level === 'province') {
          this.loading = true;
          this.mapLevel = 1;
          this.chart.resize({
            width: 430
          });
          this.result.province.adcode = +adcode;
          this.result.province.name = name;
          this.result.province.center = center;
          this.readJson.readJson(`${level}/${adcode}`).subscribe(e => {
            const cityList = e.features.map(({ properties }: any) => {
              return {
                name: properties.name,
                adcode: properties.adcode,
                center: properties.center,
                observable: this.readJson.readJson(`${properties.level}/${properties.adcode}`)
              };
            });
            zip(...cityList.map(({ observable }) => observable)).pipe(
              tap(c => console.log(c)),
              map(cities => cities.map(({ features }, i) => {
                return {
                  name: cityList[i].name,
                  adcode: cityList[i].adcode,
                  center: cityList[i].center,
                  children: features.map(({ properties }) => properties)
                };
              }))
            ).subscribe(list => {
              this.cityList = list;
              this.loading = false;
            });
            this.chart.clear();
            echarts.registerMap(name, e);
            this.options.series[0].data = this.fmtGeoData(e);
            this.options.series[0].center = center;
            this.title = name;
            (this.options.series[0] as EChartOption.SeriesMap).map = name;
            this.chart.setOption(this.options, true);
          });
        }
        if (level === 'city') {
          this.result.city.adcode = adcode;
          this.result.city.name = name;
          this.close();
        }
      });
  }

  hoverCity(city): void {
    this.chart.setOption({
      series: [{
        zoom: 2,
        center: city.center
      }]
    });
    this.chart.dispatchAction({
      type: 'mapSelect',
      name: city.name
    });
    this.result.city.adcode = city.adcode;
    this.result.city.name = city.name;
  }

  leaveDistrict(): void {
    this.chart.setOption({
      series: [{
        zoom: 1.2,
        center: null
      }]
    });

    this.chart.dispatchAction({
      type: 'mapUnSelect',
      name: this.result.city.name
    });
    this.result.city = {};
    this.result.district = {};
  }

  chooseDistrict(district): void {
    this.result.district.adcode = district.adcode;
    this.result.district.name = district.name;
    this.close();
  }

  back(): void {
    this.title = '';
    this.loading = true;
    this.mapLevel = 0;
    this.readJson.readJson('china').subscribe(ChinaJson => this.renderChina(ChinaJson));
  }

  close(): void {
    console.log(this.result);
    this.closeFn();
  }

  ngOnDestroy(): void {
    this.chartInit$.complete();
  }
}
