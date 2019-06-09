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

  public hor = [
    { val: '7-8', isChecked: true },
    { val: '8-9', isChecked: false },
    { val: '9-10', isChecked: false }
  ];

  showServEst=false;

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

private selectedLink: string="esthetician";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) {   
            return false;  
  }  
  
        return (this.selectedLink === name);  
    }  

        
  
  ngOnInit() {
  }

}
