import { Routes } from '@angular/router';
import {ArticlesComponent} from "./les-bons-plans/components/home/articles.component";
import {RentCarComponent} from "./les-bons-plans/components/rent-car/rent-car.component";
import {RentHouseComponent} from "./les-bons-plans/components/rent-house/rent-house.component";
import {ConnexionComponent} from "./core/components/connexion/connexion.component";
import {InscriptionComponent} from "./core/components/inscription/inscription.component";
import {HouseDetailsComponent} from "./les-bons-plans/components/rent-house/house-details/house-details.component";
import {CarDetailsComponent} from "./les-bons-plans/components/rent-car/car-details/car-details.component";

export const routes: Routes = [
  { path: "", component: ArticlesComponent},
  { path: "rent-car", component: RentCarComponent},
  { path: "rent-car/:id", component: CarDetailsComponent},
  { path: "rent-house", component: RentHouseComponent},
  { path: "rent-house/:id", component: HouseDetailsComponent},
  { path: "connexion", component: ConnexionComponent},
  { path: "inscription", component: InscriptionComponent}
];
