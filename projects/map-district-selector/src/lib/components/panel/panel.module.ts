import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ReadJsonModule } from '../../utils/read-json/read-json.module';
@NgModule({
  imports: [
    CommonModule,
    ReadJsonModule
  ],
  declarations: [PanelComponent],
  exports: [PanelComponent],
  entryComponents: [PanelComponent],
})
export class MDSPanelModule { }
