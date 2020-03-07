import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  constructor(private router: Router) { }

  currentpage(){
    this.router.navigate([``]);
    console.log("I AM HERE");
  }

  ngOnInit() {
  }

}
