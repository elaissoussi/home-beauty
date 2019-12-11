import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
/*
  
    ,public formGroup:FormGroup,
      public formControl:FormControl,public validator:Validator
  
*/
export class loginPage implements OnInit {
  email:String ;
  password:String ;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  loginForm:FormGroup;

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
    ]

  }

  constructor(private router: Router, private authenticationService: AuthenticationService,
              public formBuilder : FormBuilder, private storage: Storage) { 

    this.loginForm = this.formBuilder.group({
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

      ]))

     // email: new FormControl
    })

  }
  

  borderColor:string="#000000";
  handleJWTAuthLogin() {
    this.authenticationService.executeJWTAuthenticationService(this.email, this.password)
        .subscribe(
          response => {
            this.storage.set('em', this.email);
            this.router.navigate(['home']);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
            alert("l\'email ou le mot de passe incorrect");
          }
        )
  }
  ngOnInit() {
    this.authenticationService.redirectLogedUser();
  }

}
