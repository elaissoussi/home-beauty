import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#loginPageModule'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
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
  {
    path: 'appointment',
    loadChildren: './pages/customers/appointment/appointment.module#AppointmentPageModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule'
  },
  {
    path: 'followed-signup',
    loadChildren: './pages/followed-signup/followed-signup.module#FollowedSignupPageModule'
  },
  {
    path: 'select-estheticians/:id',
    loadChildren: './pages/customers/select-estheticians/select-estheticians.module#SelectEstheticiansPageModule'
  },
  {
    path: 'payment/:id',
    loadChildren: './pages/customers/payment/payment.module#PaymentPageModule'
  },
  {
    path: 'order-detail/:id',
    loadChildren: './pages/customers/order-detail/order-detail.module#OrderDetailPageModule'
  },
  {
    path: 'order-list',
    loadChildren: './pages/customers/order-list/order-list.module#OrderListPageModule'
  },
  {
    path: 'confirmation',
    loadChildren: './pages/customers/confirmation/confirmation.module#ConfirmationPageModule'
  },
  {
    path: 'services',
    loadChildren: './pages/customers/service/service.module#ServicePageModule'
  },
  {
    path: 'product-detail/:id',
    loadChildren: './pages/product-detail/product-detail.module#ProductDetailPageModule'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
