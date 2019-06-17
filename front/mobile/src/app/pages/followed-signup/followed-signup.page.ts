import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followed-signup',
  templateUrl: './followed-signup.page.html',
  styleUrls: ['./followed-signup.page.scss'],
})
export class FollowedSignupPage implements OnInit {
  public days =['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];

  public hor = [
    { val: '7-8', isChecked: false },
    { val: '8-9', isChecked: false },
    { val: '9-10', isChecked: false }
  ];
  i:number=1;

  constructor() { }

  onSignUp() {
   /* if(this.customer===true){
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
    }*/
    

  
}

  ngOnInit() {
  }

}
