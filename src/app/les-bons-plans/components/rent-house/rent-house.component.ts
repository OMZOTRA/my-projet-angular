import {Component, OnInit} from '@angular/core';
import {House} from "../../model/house";
import {HouseService} from "../../service/house.service";
import {NgForOf} from "@angular/common";
import {InputSearchComponent} from "../../../features/input-search/input-search.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-rent-house',
  standalone: true,
  imports: [
    NgForOf,
    InputSearchComponent,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './rent-house.component.html',
  styleUrl: './rent-house.component.scss'
})
export class RentHouseComponent implements OnInit{

  houseLocations : House[] = []
  filterHouseList : House[] = []
  searchFilter: FormControl = new FormControl('')

  constructor(private articleService : HouseService) {
    this.searchFilter.valueChanges.pipe(
      tap(value => {
        if(!value) this.houseLocations = this.filterHouseList;
        this.houseLocations = this.filterHouseList.filter( filterHouse  =>
          filterHouse?.city.toLowerCase().includes(value.toLowerCase()))
      })
    ).subscribe()
  }

  ngOnInit() {
    this.articleService.getAllHouse().then( (houseList: House[]) => {
      this.houseLocations = houseList
      this.filterHouseList = houseList
    })
  }

 /* filterValue(text: string) {
    if(!text) this.houseLocations = this.filterHouseList;
      this.houseLocations = this.filterHouseList.filter( filterHouse  =>
         filterHouse?.city.toLowerCase().includes(text.toLowerCase()))
  }*/

}
