import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GEO_JSON_API_PATH } from '../../map-district-selector.token';

@Injectable()
export class ReadJsonService {

  constructor(
    private http: HttpClient,
    @Inject(GEO_JSON_API_PATH) private path: string
  ) { }

  readJson(fileName): Observable<any> {
    return this.http.get(`${this.path}/${fileName}.json`);
  }
}
