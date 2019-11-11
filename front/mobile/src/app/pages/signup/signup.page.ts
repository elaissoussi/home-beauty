import { User, UserType } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SignupService } from 'src/app/services/signup.service'
import { NavController, AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators,FormControl, AbstractControl } from '@angular/forms';
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
  //confirmPassword:string;
  phoneNumber:number;
  firstName1: AbstractControl;
  lastName1:AbstractControl;
  email1: AbstractControl;
  password1: AbstractControl;
  phoneNumber1: AbstractControl;
  
  createSuccess = false;
  registerCredentials :User; 
   public signupForm: FormGroup;

  constructor(private signupservice:SignupService,private router:Router,
    private navCrl: NavController,private alertCtrl: AlertController,private formBuilder :FormBuilder) { 
   this.signupForm = this.formBuilder.group({
      firstName1: ['', Validators.required],
      lastName1: ['', Validators.required],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      email1: ['',[ Validators.required, Validators.email]],
      phoneNumber1: ['', Validators.required],
      confirmPassword1: ['', Validators.required],
      type: ['', Validators.required],
   }, {
   // validator: MustMatch('password', 'confirmPassword')
});
this.firstName1=this.signupForm.controls['firstName1'];
this.lastName1=this.signupForm.controls['lastName1'];
this.password1=this.signupForm.controls['password1'];
this.email1=this.signupForm.controls['email1'];
this.phoneNumber1=this.signupForm.controls['phoneNumber1'];
    }
   
public type :string;
  //public customer:boolean;
onSignUp() {
  
    if(this.type==="customer"){

    //  this.esthetician=false;
  this.signupservice.signupCust(this.email, this.password,this.lastName,this.firstName1,this.phoneNumber)
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
     this.signupservice.signupEsth(this.email, this.password,this.lastName,this.firstName,this.phoneNumber)
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
