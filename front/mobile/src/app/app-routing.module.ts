import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
 
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
