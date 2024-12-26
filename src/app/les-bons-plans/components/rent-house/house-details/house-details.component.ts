import {Component, inject, OnInit} from '@angular/core';
import {House} from "../../../model/house";
import {HouseService} from "../../../service/house.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-house-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.scss'
})
export class HouseDetailsComponent implements OnInit{

  houseLocation!: House
  houseLocationService = inject(HouseService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    const houseLocationId = +this.activatedRoute.snapshot.params['id'];
    this.houseLocationService.getHouseById(houseLocationId).then(( houseLocation: House) =>
    this.houseLocation = houseLocation)
  }
}
