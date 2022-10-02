import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/items';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getall():food[]{
    return[
      {
        id:1,
        price:10,
        name:'pizza periperi',
        favorite:false,
        star:4.5,
        tags:['fastfood','piazza','Lunch'],
        imageUrl:'/assets/food-1.jpg',
        cooktime:'10-20',
        origins:['italy']
    },
    {
      id:2,
      price:20,
      name:'pizza periperi',
      favorite:true,
      star:4.3,
      tags:['fastfood','a','Lunch'],
      imageUrl:'/assets/food-2.jpg',
      cooktime:'10-20',
      origins:['italy'],
  },
  {
    id:3,
    price:30,
    name:'pizza periperi',
    favorite:false,
    star:4.2,
    tags:['fastfood','pizdza','Lunch'],
    imageUrl:'/assets/food-3.jpg',
    cooktime:'10-20',
    origins:['italy'],
},
{
  id:4,
  price:40,
  name:'pizza periperi',
  favorite:true,
  star:4.1,
  tags:['fastfood','pizdza','Lunch'],
  imageUrl:'/assets/food-4.jpg',
  cooktime:'43-20',
  origins:['italy'],
},
{
  id:5,
  price:50,
  name:'pizza periperi',
  favorite:false,
  star:4.0,
  tags:['fastfood','pizza','Lunch'],
  imageUrl:'/assets/food-4.jpg',
  cooktime:'10-20',
  origins:['italy'],
}
      
    ];
  }
}
