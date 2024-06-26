import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-add-User',
  templateUrl: './add-User.component.html',
  styleUrls: ['./add-User.component.css'],
})
export class AddUserComponent implements OnInit {

  constructor() { }
  form!: FormGroup;
  displayModal: boolean = false;
  displayEditModal: boolean = false;
  loading: boolean = false;
  formBuilder: FormBuilder = inject(FormBuilder);
  messages: Message[] = [];
  router = inject(Router);
  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      abbreviation: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    this.loading = true;
    const payload = {...this.form.value};
    console.log(payload);
  }
 
}
