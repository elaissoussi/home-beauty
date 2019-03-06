import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  createSuccess = false;
  registerCredentials = { 
    email: '', 
    password: '' ,
    lastname: '',
    firstname: '',
    mob: ''
  
  };
  constructor(private auth:AuthenticationService,private navCrl: NavController,private alertCtrl: AlertController) { 


  }

   register() {
   /* this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        alert("Votre compte a été creer avec success.");
      } else {
        alert("Il y a un erreur de la creation.");
       
      }
    },
      error => {
        alert("Error " + error);
      });*/
  }

  ngOnInit() {
  }

}
