import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ReadJsonService {

  constructor(
    private http: HttpClient
  ) { }

  readJson(fileName): Observable<any> {
    return this.http.get(`assets/${fileName}.json`);
  }

  getJsonFromApi(url): Observable<any> {
    return this.http.get(url);
  }
}
