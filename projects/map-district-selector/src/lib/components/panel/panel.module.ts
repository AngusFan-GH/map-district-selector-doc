import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ReadJsonModule } from '../../utils/read-json/read-json.module';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReadJsonModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  declarations: [PanelComponent],
  exports: [PanelComponent],
  entryComponents: [PanelComponent],
})
export class MDSPanelModule { }
