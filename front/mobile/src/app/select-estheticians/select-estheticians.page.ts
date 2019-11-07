import { Component, OnInit } from '@angular/core';

import { AppointementService } from '../services/appointement.service';

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

  estheticianList: EstheticianList = undefined;

  constructor(private appointement: AppointementService, private router: Router,
    private route: ActivatedRoute, private plt: Platform) {

    this.plt.ready().then(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.appointement.getEstheticianAvailabilitiesTime(id).subscribe(

        response => {
          this.estheticianList = this.convert(response);
        },
        error => {
          console.log(error);
        }
      );

    })


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


}
