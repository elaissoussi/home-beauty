import { User, UserType } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match/validator';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  createSuccess = false;
  registerCredentials :User; 
  
  signupForm: FormGroup;
  constructor(private authenticationService:AuthenticationService,
    private navCrl: NavController,private alertCtrl: AlertController,private formBuilder :FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['',[ Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      type: ['', Validators.required],
   }, {
    validator: MustMatch('password', 'confirmPassword')
});
        
  }

  onSignUp() {
    
    console.log("hellloooo");
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      console.log(this.signupForm.getError);
        return;
    }
console.log(this.registerCredentials);
    
}

  ngOnInit() {
    this.registerCredentials =new User();
    this.authenticationService.RedirectLogedUser();
   
  }
  

}
