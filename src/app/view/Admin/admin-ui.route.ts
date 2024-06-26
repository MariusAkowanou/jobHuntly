import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUiLayoutComponent } from './adminUiLayout/adminUiLayout.component';
import { AdminRoutingModule } from './admin.route';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { ListUserComponent } from './page/list-User/list-User.component';
import { ListTrajetComponent } from './page/list-trajet/list-trajet.component';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AdminUiLayoutComponent,
    ListUserComponent,
    ListTrajetComponent


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule



  ],
})
export class AdminUiModule {}
