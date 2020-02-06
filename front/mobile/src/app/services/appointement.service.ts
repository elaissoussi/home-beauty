import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './../app.constants';
import { DatePipe } from '@angular/common';
import { Availability } from 'src/app/models/Availability';
import {JsonConvert, Any} from "json2typescript"
import { AvailabilityList } from '../models/AvailabilityList';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppointementService {

 
  
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getEstheticianAvailabilities(zipcode : number, date : Date): Observable<any> {
    let newDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    return this.http.get(`${API_URL}/estheticians/zipcode/${zipcode}/date/${newDate}`);
  }

  sendZipCodeAndDate(zipcode : number, date : Date,id :number): Observable<any> {
    let newDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    return this.http.post<any>(`${API_URL}/cart/addAppointement`,{zipcode,newDate,id})
    .pipe(map(response => {
          console.log(response);
          return response;
          
        }
        )
      );
  }

  getEstheticianAvailabilitiesTime(id : number): Observable<any> {
    
    return this.http.get(`${API_URL}/estheticians/availability/${id}`);
  }
  
  convert(JsonObject : any) : AvailabilityList {

    let jsonConvert : JsonConvert = new JsonConvert();        
    let availabilityList : AvailabilityList = undefined;
    
    try {
      availabilityList = jsonConvert.deserializeObject(JsonObject, AvailabilityList);
    } catch (e) {
        console.log((<Error>e));
    }
    return availabilityList;
  }
}
