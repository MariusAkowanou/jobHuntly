import { Component, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import path from 'path';
import { AdminUiLayoutComponent } from './adminUiLayout/adminUiLayout.component';
import { ListUserComponent } from './page/list-User/list-User.component';
import { AddUserComponent } from './page/add-User/add-User.component';
import { ListTrajetComponent } from './page/list-trajet/list-trajet.component';

export const routes: Route[] = [
  {
    path: '',
    component:AdminUiLayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent,
      },
      {
        path:'admin-dashboard',
        component:DashboardComponent,
      },
      {
        path:'admin/ajouter-utilisateur',
        component:AddUserComponent,
      },
      {
        path:'admin/list-tajet',
        component:ListTrajetComponent,
      },
      {
        path:'admin/list-utilisateur',
        component:ListUserComponent,
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
