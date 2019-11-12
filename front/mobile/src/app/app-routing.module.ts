import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: './pages/login/login.module#loginPageModule' 
  },
  { 
    path: 'inscription', 
    loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' 
  },
 
  { path: 'home', canActivate: [AuthGuardService], 
  children:[
    {
      path:'',
      loadChildren: './pages/menu/home/home.module#HomePageModule'
    },
    {
      path: 'aide', 
      loadChildren: './pages/menu/aide/aide.module#AidePageModule'
    },
    {
      path: 'paiment',
      loadChildren: './pages/menu/paiment/paiment.module#PaimentPageModule'
    },
    {
      path: 'parametres', 
      loadChildren: './pages/menu/parametres/parametres.module#ParametresPageModule'
    },
    {
      path: 'haircare', 
      loadChildren: './pages/menu/haircare/haircare.module#HaircarePageModule' 
    }
          ]
 },
{ path: 'cart', 
  loadChildren: './cart/cart.module#CartPageModule' 
},
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'followed-signup', loadChildren: './pages/followed-signup/followed-signup.module#FollowedSignupPageModule' },
  { path: 'select-estheticians/:id', loadChildren: './select-estheticians/select-estheticians.module#SelectEstheticiansPageModule' },  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' }


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
