import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderPage } from './order/order.page';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  SearchProduct(keyword: any, value: any) {
    throw new Error('Method not implemented.');
  }
  constructor() { }

}