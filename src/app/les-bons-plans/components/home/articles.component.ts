import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../service/house.service";
import {map, Observable, take, tap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent{
  constructor(private articleService : HouseService){}


}
