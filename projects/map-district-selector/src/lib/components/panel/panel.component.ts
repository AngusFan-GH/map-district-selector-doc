import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { fromEvent, Subject, zip, of } from 'rxjs';
import { MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN } from '../../map-district-selector.token';
import { GeoDataType, MapTheme, MapSelectResult, MUNICIPALITIES, HAINAN } from '../../map-district-selector.types';
import { tap, map, startWith } from 'rxjs/operators';
import { ECharts, EChartOption } from 'echarts';
import * as echarts from 'echarts';
import { FormControl } from '@angular/forms';
import { MapDistrictSelectorService } from '../../map-district-selector.service';

@Component({
  selector: 'mds-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapChart') mapChart: ElementRef;
  searchControl = new FormControl();
  searchOptions: any = [];
  searchPlaceholder = ['请输入您要查找的省市', '请输入您要查找的地区'];
  chartInit$ = new Subject<boolean>();
  loading = true;
  chart: ECharts;
  title = '';
  mapLevel = 0;
  cityType: 'Normal' | 'Municipality' = 'Normal';
  cityList: any[] = [];
  municipalityCityList: any[] = [];
  options: any = {
    series: [
      {
        type: 'map',
        map: 'China',
        roam: true,
        zoom: 1.2,
        aspectScale: 0.75,
        selectedMode: 'single',
        ...new MapTheme({
          areaColor: '#e0ece4',
          emphasisAreaColor: '#ff4b5c',
          labelColor: '#66bfbf',
          emphasisLabelColor: '#056674',
        })
      },
    ]
  };
  result = new MapSelectResult();
  @HostListener('window:resize') resize(): void {
    this.chart.resize();
  }
  constructor(
    // @Inject(MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN) public closeFn: () => void,
    private helper: MapDistrictSelectorService,
    private readJson: ReadJsonService,
    private $cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    zip(
      this.chartInit$.pipe(tap(() => this.initChart())),
      this.readJson.readJson('china')
    ).subscribe(([_, ChinaJson]) => {
      this.loading = false;
      this.renderChina(ChinaJson);
      this.initSearchOptions();
    });
  }

  ngAfterViewInit(): void {
    this.chartInit$.next(true);
    this.$cdRef.detectChanges();
  }

  private initSearchOptions(): void {
    this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterSearch(value))
    ).subscribe(e => this.searchOptions = e);
  }

  private filterSearch(value: string): any {
    const filterValue = value.trim().toLowerCase();
    if (!filterValue) {
      return [];
    }
    let options = [];
    switch (this.mapLevel) {
      case 0:
        options = this.options.series[0].data;
        break;
      case 1:
        options = JSON.parse(JSON.stringify(this.cityList)).reduce((p, c) => {
          p.push(c);
          if (c.children.length) {
            p.push(...c.children.map(child => {
              child.name = `${c.name}-${child.name}`;
              return child;
            }));
          }
          return p;
        }, []);
        break;
    }
    return options.filter(option => option.name && option.name.toLowerCase().includes(filterValue));
  }

  private initChart(): void {
    this.chart = echarts.init(this.mapChart.nativeElement);
    this.bindMapSelectChangedEvent();
  }


  private renderChina(ChinaJson): void {
    this.chart.resize({
      width: 860
    });
    this.resetMap('China', ChinaJson);
    this.loading = false;
  }

  private fmtGeoData(data): any {
    return data.features.map(g => g.properties);
  }

  private isMunicipality(adcode): boolean {
    return MUNICIPALITIES.indexOf(+adcode) !== -1;
  }

  private isHainan(adcode): boolean {
    return HAINAN === +adcode;
  }

  private bindMapSelectChangedEvent(): void {
    fromEvent(this.chart, 'mapselectchanged')
      .subscribe((param: any) => {
        this.mapSelectChangedEventCallBack(param.batch[0].name);
      });
  }

  mapSelectChangedEventCallBack(selectedName: string): void {
    if (this.mapLevel === 1) {
      const [cityName, districtName] = selectedName.split('-');
      const city = this.cityList.find(c => c.name === cityName);
      this.result.setCity({
        adcode: +city.adcode,
        name: city.name,
      });
      if (districtName) {
        const district = city.children.find(d => d.name === districtName);
        this.result.setDistrict({
          adcode: +district.adcode,
          name: district.name
        });
      }
      this.close();
      return;
    }
    this.searchControl.setValue('');
    const selectData = ((this.options as EChartOption).series[0].data as EChartOption.SeriesMap.DataObject[])
      .find((v) => v.name === selectedName) as GeoDataType;
    if (!selectData) {
      return;
    }
    const { level, adcode, name, center, childrenNum } = selectData;
    if (level === 'province') {
      this.result.setProvince({
        adcode: +adcode,
        name,
        center
      });
      if (!childrenNum) {
        this.close();
        return;
      }
      if (this.isMunicipality(adcode)) {
        this.result.setCity({
          adcode: +adcode,
          name,
          center
        });
      }
      this.loading = true;
      this.mapLevel = 1;
      this.chart.resize({
        width: 430
      });
      this.renderCity(selectData);
    }
    if (level === 'city') {
      this.result.setCity({
        adcode: +adcode,
        name
      });
      this.close();
    }
    if (level === 'district') {
      this.result.setDistrict({
        adcode: +adcode,
        name
      });
      this.close();
    }
  }

  private renderCity({ level, adcode, center, name }: GeoDataType): void {
    this.readJson.readJson(`${level}/${adcode}`).subscribe(e => {
      adcode = +adcode;
      if (this.isMunicipality(adcode)) {
        this.getMunicipalityDistrictList({ level, adcode, center, name }, e);
      } else {
        this.getDistrictList(e);
      }
      this.resetMap(name, e);
      this.title = name;
    });
  }

  private getMunicipalityDistrictList({ level, adcode, center, name }, e): void {
    this.cityType = 'Municipality';
    this.cityList = [
      {
        level,
        adcode,
        center,
        name,
        children: e.features.map(({ properties }) => properties)
      }
    ];
    this.loading = false;
  }

  private getDistrictList(e): void {
    const observables = e.features.map(({ properties }: any) => {
      return properties.childrenNum ? this.readJson.readJson(`${properties.level}/${properties.adcode}`) : of({ features: [] });
    });
    zip(...observables).pipe(
      map(cities => cities.map(({ features }, i) => {
        const { name, adcode, center, level } = e.features[i].properties;
        return {
          name,
          adcode,
          center,
          level,
          children: features.map(({ properties }) => properties)
        };
      }))
    ).subscribe(list => {
      this.cityType = 'Normal';
      this.cityList = list;
      this.loading = false;
    });
  }

  private resetMap(name, data, center = null): void {
    this.chart.clear();
    echarts.registerMap(name, data);
    (this.options.series[0] as EChartOption.SeriesMap).map = name;
    this.options.series[0].data = this.fmtGeoData(data);
    this.options.series[0].center = center;
    this.chart.setOption(this.options, true);
  }

  hoverDistrict(city, district): void {
    this.chart.setOption({
      series: [{
        zoom: 2,
        center: district.center
      }]
    });
    this.chart.dispatchAction({
      type: 'mapSelect',
      name: district.name
    });
    this.result.setCity({
      adcode: city.adcode,
      name: city.name
    });
  }

  hoverCity({ center, name, adcode }): void {
    this.chart.setOption({
      series: [{
        zoom: 2,
        center
      }]
    });
    this.chart.dispatchAction({
      type: 'mapSelect',
      name
    });
    this.result.setCity({
      adcode,
      name
    });
  }

  leaveDistrict(clearCity = true): void {
    this.chart.setOption({
      series: [{
        zoom: 1.2,
        center: null
      }]
    });
    if (this.result?.city?.name) {
      this.chart.dispatchAction({
        type: 'mapUnSelect',
        name: this.result?.city?.name
      });
      if (clearCity) {
        this.result.clear('city');
      }
      this.result.clear('district');
    }
  }

  chooseCity(city): void {
    this.result.setCity(city);
    this.close();
  }

  chooseDistrict(district): void {
    this.result.setDistrict(district);
    this.close();
  }

  back(): void {
    this.title = '';
    this.loading = true;
    this.mapLevel = 0;
    this.cityList = [];
    this.municipalityCityList = [];
    this.readJson.readJson('china').subscribe(ChinaJson => this.renderChina(ChinaJson));
  }

  close(): void {
    console.log(this.result.getResult());
    // this.closeFn();
    this.helper.close();
  }

  ngOnDestroy(): void {
    this.chartInit$.complete();
  }
}
