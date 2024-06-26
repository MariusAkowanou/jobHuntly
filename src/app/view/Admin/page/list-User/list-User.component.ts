import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-User',
  templateUrl: './list-User.component.html',
  styleUrls: ['./list-User.component.css']
})
export class ListUserComponent implements OnInit {
  loading: boolean = false;
  router = inject(Router);

  product={
    name:'jule',
    price:12,
    category:'bbh',
    image: 'bamboo-watch.jpg',

  }

  ngOnInit() {
  }
  clear(table: Table) {
    table.clear();
  }

  onsearch($event: any) {
    if ($event.target.value) {
      return $event.target.value;
    }
    return undefined;
  }
}
