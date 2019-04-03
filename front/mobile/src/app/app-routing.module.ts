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
    }
]


},
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
    
  {
    path: 'haircare', 
    loadChildren: './pages/haircare/haircare.module#HaircarePageModule' 
  }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
