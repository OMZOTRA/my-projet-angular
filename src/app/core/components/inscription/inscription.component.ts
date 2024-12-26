import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit{
  form_inscription!: FormGroup;
  formBuilder = inject(FormBuilder)

  ngOnInit() {
   this.initForm()
  }

  initForm(){
    this.form_inscription = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    })
  }

}
