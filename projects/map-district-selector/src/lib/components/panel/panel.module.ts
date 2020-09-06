import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { ReadJsonModule } from '../../utils/read-json/read-json.module';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ReadJsonModule
  ],
  declarations: [PanelComponent],
  exports: [PanelComponent],
  entryComponents: [PanelComponent],
  providers: [
    { provide: NGX_ECHARTS_CONFIG, useValue: echarts }
  ]
})
export class MDSPanelModule { }
