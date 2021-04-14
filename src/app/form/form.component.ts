import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form : FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      postalAdress: ['',Validators.required],
      comment:['']
    });
   }

  ngOnInit(): void {
  }
  submitForm() {
    alert(JSON.stringify(this.form.value));
  }
}
