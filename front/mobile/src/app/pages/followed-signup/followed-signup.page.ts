import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-followed-signup',
  templateUrl: './followed-signup.page.html',
  styleUrls: ['./followed-signup.page.scss'],
})
export class FollowedSignupPage implements OnInit {

  public  data = [
    {
      Days: 'Lundi',
      //expanded: true,
      products: [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    },
    {
      Days: 'Mradi',
      //expanded: true,
      products: [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    },
    {
      Days: 'Mecredi',
      //expanded: true,
      products: [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    },
    {
      Days: 'Jeudi',
      //expanded: true,
      products: [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    }
  ];

 /* public days =['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];

  public hor = [
    { val: '7-8', isChecked: false },
    { val: '8-9', isChecked: false },
    { val: '9-10', isChecked: false }
  ];*/


  constructor(private authservice : AuthenticationService,private storage: Storage) { }
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  /*
 */
  getdis(){
    return this.data;
  }
getInfoEsth(){
  this.storage.get('idEsth').then((val) => {
    console.log('Your Id is', val);
  });
}

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
