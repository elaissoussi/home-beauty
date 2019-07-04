import { User, UserType } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match/validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

 

 
  //public customer :Boolean=!this.esthetician;


  

  email:String ;
  password:String ;
  firstName:string;
  lastName:string;
  phoneNumber:number;
  
  createSuccess = false;
  registerCredentials :User; 
  signupForm: FormGroup;
  constructor(private authenticationService:AuthenticationService,private router:Router,
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
public type :string;
  //public customer:boolean;
onSignUp() {
  
    if(this.type==="customer"){
    //  this.esthetician=false;
  this.authenticationService.signupCust(this.email, this.password,this.lastName,this.firstName,this.phoneNumber)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
      
        }
      )
     console.log("Customers bien enregistrer");
    } 
   else
   {
      // this.customer=false;
     this.authenticationService.signupEsth(this.email, this.password,this.lastName,this.firstName,this.phoneNumber)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['followed-signup']);
        },
        error => {
          console.log(error);
      
        } 
      )
      console.log("Esthetician bien enregistrer");
    }

  
}



        
  
  ngOnInit() {
  }

}
