import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'messenger', loadChildren: './messenger/messenger.module#MessengerPageModule' },
  { path: 'todo-list', loadChildren: './todo-list/todo-list.module#TodoListPageModule' },
  { path: 'single-image-view', loadChildren: './single-image-view/single-image-view.module#SingleImageViewPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
