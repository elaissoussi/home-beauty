import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './pages/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#loginPageModule'
  },
  /*{
    path: 'inscription',
    loadChildren: './pages/inscription/inscription.module#InscriptionPageModule'
  },*/

  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },

  /* {
   path: 'home', //canActivate: [AuthGuardService],
    children: [
      {
        path: '',
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
  },*/
  { 
    path: 'aide',
    loadChildren: './pages/aide/aide.module#AidePageModule'
  },
  {
    path: 'haircare',
    loadChildren: './pages/customers/haircare/haircare.module#HaircarePageModule'
  },
  {
    path: 'cart',
    loadChildren: './pages/customers/cart/cart.module#CartPageModule'
  },
  { path: 'appointment', loadChildren: './pages/customers/appointment/appointment.module#AppointmentPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'followed-signup', loadChildren: './pages/followed-signup/followed-signup.module#FollowedSignupPageModule' },
  { path: 'select-estheticians/:id', loadChildren: './pages/customers/select-estheticians/select-estheticians.module#SelectEstheticiansPageModule' },
  { path: 'payment/:id', loadChildren: './pages/customers/payment/payment.module#PaymentPageModule' },
  { path: 'order-detail/:id', loadChildren: './pages/customers/order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'order-list', loadChildren: './pages/customers/order-list/order-list.module#OrderListPageModule' },
  { path: 'confirmation', loadChildren: './pages/customers/confirmation/confirmation.module#ConfirmationPageModule' },
  //{ path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'service', loadChildren: './pages/customers/service/service.module#ServicePageModule' }
  //{ path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
