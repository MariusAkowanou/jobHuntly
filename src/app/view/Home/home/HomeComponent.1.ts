import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../../shared/component/menu/menu.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MenuComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
