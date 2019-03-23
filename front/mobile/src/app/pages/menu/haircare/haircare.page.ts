import { Component, OnInit } from '@angular/core';
import {HaircaireService} from 'src/app/services/haircaire.service';


@Component({
  selector: 'app-haircare',
  templateUrl: './haircare.page.html',
  styleUrls: ['./haircare.page.scss'],
})
export class HaircarePage implements OnInit {

  constructor(private haircare: HaircaireService) {}

  ngOnInit() {
    this.haircare.getHaircaireServices();
  }
  
}
