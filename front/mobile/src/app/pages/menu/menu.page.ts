import { Component, OnInit } from '@angular/core';
import { RouterEvent,Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath='';

  public pages = [
      {
        title:'Acceuil',
        url:'/menu/home'
      },
      {
        title:'Aide',
        url:'/menu/aide'
      },
      {
        title:'Paiment',
        url:'/menu/paiment'
      },
      {
        title:'Paramètres',
        url:'/menu/parametres'
      },
      {
        title:'Coiffure',
        url:'/menu/haircare'
      }
  ];


  constructor(private router: Router) { 

    this.router.events.subscribe((event: RouterEvent)=>{
      this.selectedPath=event.url;

    });
  }

  ngOnInit() {
  }

}
