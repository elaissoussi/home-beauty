import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from './../app.constants';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  
  url = `${API_URL}/estheticians/`;
  apiKey = '';
  constructor(private http: HttpClient) { }

  searchData(zipcode: number): Observable<any> {
    return this.http.get(`${this.url}/zipcode/${zipcode}`).pipe(
      map(results => {
        console.log(results)
      })
    );
  }
}
