import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#loginPageModule'
  },
  {
    path: 'inscription',
    loadChildren: './pages/inscription/inscription.module#InscriptionPageModule'
  },

  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },

   {
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
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartPageModule'
  },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'followed-signup', loadChildren: './pages/followed-signup/followed-signup.module#FollowedSignupPageModule' },
  { path: 'select-estheticians/:id', loadChildren: './select-estheticians/select-estheticians.module#SelectEstheticiansPageModule' },
  { path: 'payment/:id', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'order-detail/:id', loadChildren: './pages/order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'order-list', loadChildren: './pages/order-list/order-list.module#OrderListPageModule' },
  { path: 'confirmation', loadChildren: './pages/confirmation/confirmation.module#ConfirmationPageModule' },
  //{ path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'service', loadChildren: './pages/service/service.module#ServicePageModule' }
  //{ path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
