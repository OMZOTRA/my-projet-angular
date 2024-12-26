import {inject, Injectable} from '@angular/core';
import {House} from "../model/house";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = "http://localhost:3000/cars"

 async  getAllCar(){
    const data = await fetch(this.url)
    return await data.json() ?? []
 }

  async getCarById(id : number): Promise<Car>{
    const data = await fetch(`http://localhost:3000/cars/${id}`)
    return await data.json() ?? {};
  }

}
