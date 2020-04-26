import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app//app.constants';
import { DatePipe } from '@angular/common';
//import { Availability } from 'src/app/models/Availability';
import { JsonConvert, Any } from "json2typescript"
import { AvailabilityList } from 'src/app/pages/customers/models/AvailabilityList';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  public page : number = 0;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getEstheticianAvailabilities(zipcode: number, date: Date): Observable<any> {
    let newDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    return this.http.get(`${API_URL}/estheticians/zipcode/${zipcode}/date/${newDate}`);
  }

  addAppointment(zipcode: number, selectedDate: Date, availabilityId: number): Observable<any> {
    let date = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
    return this.http.post<any>(`${API_URL}/checkout/addAppointment`,
      {
        zipcode,
        date,
        availabilityId
      })
      .pipe(map(response => {
        return response;
      }
      )
      );
  }

  getAvailabileEstheticians(id: number): Observable<any> {
    return this.http.get(`${API_URL}/estheticians/availability/${id}`);
  }

  convert(JsonObject: any): AvailabilityList {

    let jsonConvert: JsonConvert = new JsonConvert();
    let availabilityList: AvailabilityList = undefined;

    try {
      availabilityList = jsonConvert.deserializeObject(JsonObject, AvailabilityList);
    } catch (e) {
      console.log((<Error>e));
    }
    return availabilityList;
  }

  loadmore () {
    this.page++;
  }
}
