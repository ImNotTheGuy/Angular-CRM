import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL_ORDERS = environment.urlApi + 'orders';

  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(this.URL_ORDERS).pipe(
      map((tab) => {
        return tab.map((obj) => {
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

  changeState(order: Order, newState: StateOrder): Observable<Order> {
    const newOrder = new Order(order);
    newOrder.state = newState;
    return this.update(newOrder);
  }

  update(newOrder: Order): Observable<Order> {
    return this.http.put<Order>(`${this.URL_ORDERS}/${newOrder.id}`, newOrder);
  }
}
