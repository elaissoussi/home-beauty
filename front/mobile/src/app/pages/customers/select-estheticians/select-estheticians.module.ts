import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SelectEstheticiansPage } from './select-estheticians.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEstheticiansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SelectEstheticiansPage]
})
export class SelectEstheticiansPageModule {}
