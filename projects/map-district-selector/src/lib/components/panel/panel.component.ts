import { Component, OnInit } from '@angular/core';
import { MapDistrictSelectorService } from '../../map-district-selector.service';
import { ReadJsonService } from '../../utils/read-json/read-json.service';
import { EChartOption } from 'echarts';

@Component({
  selector: 'mds-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  mapOptions: EChartOption = null;
  constructor(
    private helper: MapDistrictSelectorService,
    private readJson: ReadJsonService
  ) {
    this.readJson.readJson('data').subscribe(data => {
      // this.mapOptions = {
      //   series: [
      //     {
      //       name: '随机数据',
      //       type: 'map',
      //       mapType: 'china',
      //       selectedMode: 'single',
      //       data
      //     }
      //   ]
      // };
    });
  }

  ngOnInit(): void {
  }

  close(): void {
    this.helper.close();
  }

}
