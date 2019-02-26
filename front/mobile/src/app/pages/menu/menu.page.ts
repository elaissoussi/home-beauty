import { Component, OnInit } from '@angular/core';
import { RouterEvent,Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

 

  pages = [
    {
      title:'Clients',
      url:'/menu/clients'
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
    }
  ];

  selectedPath='';


  constructor(private router: Router) { 

    this.router.events.subscribe((event: RouterEvent)=>{
      this.selectedPath=event.url;

    });
  }

  ngOnInit() {
  }

}
