import { Routes } from '@angular/router';
import { HomeComponent } from './view/Home/home/HomeComponent.1';
import { AuthGuard } from './core/gard/auth.gard';
import { Role } from './core/models/roles';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    /*canActivate: [AuthGuard],
    data: {
        role: Role.Admin,
    },*/
    loadChildren: () =>
        import('./view/Admin/admin-ui.route').then((m) => m.AdminUiModule),
},
];

