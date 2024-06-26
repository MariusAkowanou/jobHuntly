import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   statistique = {
      nbUser:1500,
      nbCours:200,
      CoursInLine:40
    }


  constructor() { }

  ngOnInit() {
  }

}
