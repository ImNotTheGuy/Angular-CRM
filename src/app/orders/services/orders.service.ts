import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  URL_ORDERS = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getListOrders() {
    return this.http.get(this.URL_ORDERS);
  }
}
