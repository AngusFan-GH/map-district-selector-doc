import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReadJsonService } from './read-json.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ReadJsonService]
})
export class ReadJsonModule { }
