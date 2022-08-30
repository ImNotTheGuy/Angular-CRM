import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL_ORDERS = 'http://localhost:3000/orders';

  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(this.URL_ORDERS).pipe(
      map(tab => {
        return tab.map(obj => {
          return new Order(obj);
        });
      })
    );
  }

  get collection() {
    return this.collection$;
  }

  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }
}
