import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GEO_JSON_API_PATH } from '../../map-district-selector.token';

@Injectable()
export class ReadJsonService {
  private cache: any = {};
  constructor(
    private http: HttpClient,
    @Inject(GEO_JSON_API_PATH) private path: string
  ) { }

  readJson(fileName): Observable<any> {
    if (this.cache[fileName]) {
      return of(this.cache[fileName]);
    }
    return this.http.get(`${this.path}/${fileName}.json`).pipe(tap(json => this.cache[fileName] = json));
  }
}
