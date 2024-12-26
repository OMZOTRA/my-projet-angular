import {Component, inject, OnInit} from '@angular/core';
import {House} from "../../../model/house";
import {HouseService} from "../../../service/house.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CarService} from "../../../service/car.service";
import {NgIf} from "@angular/common";
import {Car} from "../../../model/car";

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit{


  carLocation!: Car
  carLocationService = inject(CarService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    const carLocationId = +this.activatedRoute.snapshot.params['id'];
    this.carLocationService.getCarById(carLocationId).then((carLocation: Car) => this.carLocation = carLocation)
  }

}
