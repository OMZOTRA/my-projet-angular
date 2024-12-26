import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Car} from "../../les-bons-plans/model/car";

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent implements OnInit{

  @Input() carLocationsFilter!: Car[]
  ngOnInit() {
  }

  filterValue(text: string) {
    console.log(this.carLocationsFilter)
  }
}
