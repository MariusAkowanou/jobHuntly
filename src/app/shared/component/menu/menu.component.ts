import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBarsStaggered, faBacon} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports:[
    FontAwesomeModule,
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  iconMenu = faBarsStaggered;
  faBacon=faBacon;
  showNavBar = false;
  showContent =true
  ngOnInit() {
  }

  showNav(){
    this.showNavBar =!this.showNavBar;
  }
}
