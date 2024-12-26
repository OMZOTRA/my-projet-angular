import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit{
  form_connexion!: FormGroup;
  formBuilder = inject(FormBuilder)


  ngOnInit() {
    this.initForm()
      }

      initForm(){
        this.form_connexion = this.formBuilder.group({
          email: [''],
          password: ['']
        })
      }

      getUser(){
         console.log(this.form_connexion.value)
      }
}
