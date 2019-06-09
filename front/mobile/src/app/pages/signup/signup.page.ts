import { User, UserType } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match/validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:String ;
  password:String ;
  firstName:string;
  lastName:string;
  phoneNumber:number;
  
  createSuccess = false;
  registerCredentials :User; 
  signupForm: FormGroup;
  constructor(private authenticationService:AuthenticationService,
    private navCrl: NavController,private alertCtrl: AlertController,private formBuilder :FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['',[ Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      type: ['', Validators.required],
   }, {
    validator: MustMatch('password', 'confirmPassword')
});
    }

onSignUp() {
    
  this.authenticationService.signup(this.email, this.password,this.lastName,this.firstName,this.phoneNumber)
      .subscribe(
        data => {
          console.log(data);
       //   this.router.navigate(['home']);
        //  this.invalidLogin = false;
        },
        error => {
          console.log(error);
          //this.invalidLogin = true;
        }
      )

  
}

handleJWTAuthLogin() {
  
}

        
  
  ngOnInit() {
  }

}
