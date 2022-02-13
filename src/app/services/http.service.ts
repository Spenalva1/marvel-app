import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpParams } from '@capacitor-community/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  protected get(url: string, params: HttpParams = {}) {
    const options: HttpOptions = {
      method: 'GET',
      url,
      params,
    };
    return from(Http.request(options)).pipe(map(response => response.data?.data));
  }
}
