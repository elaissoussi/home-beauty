import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-connecxion',
  templateUrl: './connecxion.page.html',
  styleUrls: ['./connecxion.page.scss'],
})
export class ConnecxionPage implements OnInit {

  constructor(private authService:AuthenticationService) { 

  }
 
  login(){

      this.authService.login();
    
  }

  ngOnInit() {
  }

}
