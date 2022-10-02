import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/items';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  food:food[]= [];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.food = this.fs.getall();
  }

}
