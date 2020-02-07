import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointementService } from '../services/appointement.service';
import { API_URL } from './../app.constants';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import { JsonConvert, Any } from "json2typescript";



@Component({
  selector: 'app-select-estheticians',
  templateUrl: './select-estheticians.page.html',
  styleUrls: ['./select-estheticians.page.scss'],
})


export class SelectEstheticiansPage {
  esths = [];
  maximumpage = 3;
  estheticianList: EstheticianList = undefined;


  constructor(private appointementService: AppointementService, private router: Router,
    private route: ActivatedRoute, private plt: Platform, private http: HttpClient) {
    this.getAvailableEstheticians();
  }

  getAvailableEstheticians() {
    this.plt.ready().then(() => {

      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.appointementService.getAvailabileEstheticians(id).subscribe(

        response => {
          this.estheticianList = this.convert(response);
          this.esths = this.esths.concat(response['results']);
          if (event) {
            //event.target.complete();
          }
        },
        error => {
          console.log(error);
        }
      );

    })


  }

  filterAvailableEstheticians(ev: any) {

    let searchValue: string = ev.target.value;

    if (searchValue == null) {
      return;
    }

    if (searchValue == "") {
      return this.getAvailableEstheticians();
    }

    let items = this.estheticianList.estheticianlist.filter((item => {
      return (item.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }));

    this.estheticianList.estheticianlist = items;
  }

  convert(estheticianJSON: Any): EstheticianList {

    let jsonConvert: JsonConvert = new JsonConvert();
    let estheticianList: EstheticianList = undefined;

    try {
      estheticianList = jsonConvert.deserializeObject(estheticianJSON, EstheticianList);
    } catch (e) {
      console.log((<Error>e));
    }
    return estheticianList;
  }

  addEsthetician(id: number) {

    this.http.post<any>(`${API_URL}/checkout/addEsthetician/${id}`, { id })
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        });

    this.router.navigate([`/payment/${id}`]);

  }


  loadMore(event) {
    this.appointementService.loadmore();
    
    /*
    this.getAvailableEstheticians(event)
    if(this.appointement.page===this.maximumpage){
        event.target.disabled=true;
    }
    */
  }

}
