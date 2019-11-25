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
  phoneNumber:number;
  
  createSuccess = false;
  registerCredentials :User; 
  signupForm:FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message : 'L\'email est obligatoire' },
      { type: 'minLength', message : 'La longueur de l\'email doit être plus longue ou égale à 6 caractères' },
      { type: 'maxLenght', message : 'La longueur de l\'email doit être inférieure ou égale à 50 caractères' },
      { type: 'pattern', message : 'Veuillez entrer une adresse email' }
    ],
    'password':[
      { type: 'required', message : 'Le mot de passe est obligatoire' },
      { type: 'minLength', message : 'La longueur de mot de passe doit être plus longue ou égale à 6 caractères' },
      { type: 'maxLenght', message : 'La longueur de mot de passe doit être inférieure ou égale à 30 caractères' },
      { type: 'pattern', message : 'Veuillez entrer le mot de passe' }
    ],
    'confirmPassword':[
      { type: 'required', message : 'La conirmation de mot de passe est obligatoire' },
      { type: 'minLength', message : 'La longueur de mot de passe doit être plus longue ou égale à 6 caractères' },
      { type: 'maxLenght', message : 'La longueur de mot de passe doit être inférieure ou égale à 30 caractères' },
      { type: 'pattern', message : 'Veuillez entrer le mot de passe' }
    ],
    'firstName': [
      { type: 'required', message : 'Le prenom est obligatoire' },
    ],
    'lastName': [
      { type: 'required', message : 'Le nom est obligatoire' },
    ],
    'phoneNumber': [
      { type: 'required', message : 'Le numéro de telephone est obligatoire' },
    ]

  }

  constructor(private signupservice:SignupService,private router:Router,public formBuilder : FormBuilder) { 

   this.signupForm = this.formBuilder.group({
      firstName: new FormControl('',Validators.compose([Validators.required])) ,
      lastName: new FormControl('',Validators.compose([Validators.required])),
      password : new FormControl('',Validators.compose([
        Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.minLength(6),
          Validators.maxLength(30)
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.minLength(6),
        Validators.maxLength(50)

      ])),
      phoneNumber: new FormControl('',Validators.compose([Validators.required])),
      confirmPassword: new FormControl('',Validators.compose([Validators.required])),
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
  this.signupservice.signupCust(this.email, this.password,this.lastName,this.firstName,this.phoneNumber)
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
