import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 20,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'leche',
      price: 20,
      quantity: 4,
      completed: true
    },
    {
      id: 2,
      title: 'cafe',
      price: 20,
      quantity: 4,
      completed: true
    }
  ];

  getItems() {
    return this.items;
  }
  addItem(item: Item) {
    this.items.unshift(item);
  }

}
