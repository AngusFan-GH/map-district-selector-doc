# 地图选择器

基于eharts的Angular地图选择器。

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Start

### Install

```powershell
npm install map-district-selector
```

### Usage

demo.module.ts

```typescript
import { MapDistrictSelectorModule, GEO_JSON_API_PATH } from 'map-district-selector';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    ...
    MapDistrictSelectorModule,
    ...
  ],
  providers: [
    { 
      provide: GEO_JSON_API_PATH, 
      useValue: 'http://localhost:8080/assets' // Geo_json资源存放位置，不要改文件及文件夹名
    }
  ]
})
export class DemoModule { }
```

demo.component.ts

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { MapDistrictSelectorService, MapSelectResultType } from 'map-district-selector';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = '地图选择器';
  selectedData: MapSelectResultType;

  constructor(
    private helper: MapDistrictSelectorService,
    public viewContainerRef: ViewContainerRef
  ) { }

  open(): void {
    this.helper.open(this.viewContainerRef).then(e => {
      this.selectedData = e;
    });
  }
}
```

demo.component.html

```html
<button (click)="open()">打开</button>
<div>省：{{selectedData?.province?.name}} -- {{selectedData?.province?.adcode}}</div>
<div>市：{{selectedData?.city?.name}} -- {{selectedData?.city?.adcode}}</div>
<div>区：{{selectedData?.district?.name}} -- {{selectedData?.district?.adcode}}</div>
```

## Online demo address

https://angusfan-gh.github.io/map-district-selector-doc/

在线地址资源加载较慢，可下载项目进行查看。