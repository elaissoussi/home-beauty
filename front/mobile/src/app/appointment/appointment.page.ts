import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AppointementService } from '../services/appointement.service';
import { AvailabilityList } from '../models/AvailabilityList';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})

export class AppointmentPage {

  zipcode: number = undefined;
  date: Date = undefined;

  availabilityList: AvailabilityList = undefined;
  radioButtonValues = [];
  isChecked: boolean = false;

  items: any = [];
  key: string = "items";
  myDate: string = new Date().toISOString();

  constructor(private router: Router, private appointmentService: AppointementService,private popover:PopoverController) { }

  listEstheticianAvailabilities() {

    this.appointmentService.getEstheticianAvailabilities(this.zipcode, this.date).subscribe(

      response => {
        this.availabilityList = this.appointmentService.convert(response);
      },
      error => {
        console.log(error);
      });
  }

  openSelectEsth(id: number) {

    if (this.radioButtonValues && this.isChecked == true) {
      this.appointmentService.addAppointment(this.zipcode, this.date, id).subscribe(

        response => {
          this.router.navigate([`select-estheticians/${id}`]);
        },
        error => {
          console.log(error);
        });

    }




  }

  async OpenPopover(ev:Event){
    const popver = await this.popover.create({
      component: PopoverPage,
      event: ev,
      translucent: true
     
    });
    popver.present();

  }

}
