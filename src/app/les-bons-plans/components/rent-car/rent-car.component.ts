import {Component, inject,OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {InputSearchComponent} from "../../../features/input-search/input-search.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [
    NgForOf,
    InputSearchComponent,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './rent-car.component.html',
  styleUrl: './rent-car.component.scss'
})
export class RentCarComponent implements OnInit{

  carLocations : Car[] = []
  carLocationsFilter: Car[] = []

  carService = inject(CarService)
  searchFilter: FormControl = new FormControl('');

  constructor() {
    this.searchFilter.valueChanges.pipe(
      tap(value => {
        if(!value) this.carLocations = this.carLocationsFilter;
        this.carLocations = this.carLocationsFilter.filter( carLocation =>
          carLocation?.marque.toLowerCase().includes(value.toLowerCase()))
      })
    ).subscribe()
  }

  ngOnInit() {
   this.carService.getAllCar().then((carLocation: Car[]) => {
     this.carLocations = carLocation
     this.carLocationsFilter = carLocation
   })
  }

 /* filterValue(text: string) {
    if(!text) this.carLocations =  this.carLocationsFilter
    this.carLocations = this.carLocationsFilter.filter( carLocation =>
       carLocation?.marque.toLowerCase().includes(text.toLowerCase()))
  }*/

}
