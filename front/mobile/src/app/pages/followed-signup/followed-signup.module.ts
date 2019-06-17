import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FollowedSignupPage } from './followed-signup.page';

const routes: Routes = [
  {
    path: '',
    component: FollowedSignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FollowedSignupPage]
})
export class FollowedSignupPageModule {}
