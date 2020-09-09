import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ReadJsonModule } from '../../utils/read-json/read-json.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ReadJsonModule,
    MatButtonModule
  ],
  declarations: [PanelComponent],
  exports: [PanelComponent],
  entryComponents: [PanelComponent],
})
export class MDSPanelModule { }
