import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {House} from "../model/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  url = 'http://localhost:3000/locations';
  constructor(private http: HttpClient) {}

  async getAllHouse(): Promise<House[]>{
    const data =  await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHouseById(id : number): Promise<House>{
    const data = await fetch(`http://localhost:3000/locations/${id}`)
    return await data.json() ?? {};
  }
}
