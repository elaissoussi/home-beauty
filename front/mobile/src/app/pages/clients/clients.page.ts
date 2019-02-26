import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
//import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';




declare var google;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})



export class ClientsPage implements OnInit {
 
  constructor(private geolocation : Geolocation ) { 


  }

  /*ionViewDidLoad() {

    this.plt.ready().then(()=>{
    this.loadHistoricRoutes();
    let mapOptions={
      zoom:13,
      mapTypeId: google.maps.mapTypeId.ROADMAP,
      mapTypeControl:false,
      streetViewControl:false,
      fullscreenControl:false
    };
    

    this.map= new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    /*this.geolocation.getCurrentPosition().then(pos=>{

      let latLng= new google.maps.latLng(pos.coords.latitude,pos.coords.lastitude);
      this.map.setCenter(latLng);
      this.map.setZoom(15);
    });
    });*/
  ///////////////////////:}

  /*loadHistoricRoutes(){
    this.storage.get('routes').then(data => {
      if(data){

        this.previousTracks=data;

      }
    });
  }*/

  

  async loadMap(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: 52.3702157, //rta.coords.altitude,
      lng: 4.895167899//rta.coords.longitude

    };
    //console.log(myLatLng);
    const mapEle:HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle,{
        center:myLatLng,
        zoom:12

    });
  }

  ngOnInit() {
    this.loadMap();
  }

}
