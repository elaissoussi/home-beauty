import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    
    component: MenuPage,
    children:[
      {
      path: 'aide', 
      loadChildren: '../aide/aide.module#AidePageModule'
    },
    {
      path: 'paiment',
       loadChildren: '../paiment/paiment.module#PaimentPageModule'
    },
    {

      path: 'parametres', 
      loadChildren: '../parametres/parametres.module#ParametresPageModule'
    },
    
   /*{
    path:'',
    redirectTo:'home'
  },*/
  { 
    path: 'connecxion', 
    loadChildren: '../connecxion/connecxion.module#ConnecxionPageModule' 
  },
  { path: 'home', 
    loadChildren: '../home/home.module#HomePageModule' 
  },


    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
