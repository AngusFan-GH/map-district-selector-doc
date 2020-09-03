import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReadJsonModule } from '../../utils/read-json/read-json.module';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ReadJsonModule
  ],
  declarations: [PanelComponent],
  exports: [PanelComponent],
  entryComponents: [PanelComponent]
})
export class MDSPanelModule { }
