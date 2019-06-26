import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
import { isDeepStrictEqual } from 'util';
import { Route, Router } from '@angular/router';
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
  public userId;

  constructor(private authservice : AuthenticationService,private storage: Storage,private router: Router) {

  
   
   this.storage.get('idEsth').then((idest) => {
     this.userId=idest;
    console.log('Your Id is', idest);
  });
  }

  //idEsthetic:number = idesthetician;

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

   
  zipCode:number;


  onSignUp() {
    
  
  this.authservice.signupEsthZipcode(this.zipCode,this.userId)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
      
        }
      )
    }
    

  


  ngOnInit() {
  }

}
