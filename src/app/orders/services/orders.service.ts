import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL_ORDERS = environment.urlApi + 'orders';

  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  refreshCollection() {
    this.http
      .get<Order[]>(this.URL_ORDERS)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  get collection() {
    return this.collection$;
  }

  changeState(order: Order, newState: StateOrder): Observable<Order> {
    const newOrder = new Order(order);
    newOrder.state = newState;
    return this.update(newOrder);
  }

  addOrUpdate(order: Order): Observable<Order> {
    return order.id ? this.update(order) : this.add(order);
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.URL_ORDERS}/${order.id}`, order).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.URL_ORDERS}`, order).pipe(
      tap(() => {
        this.refreshCollection();
      }))
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<Order>(`${this.URL_ORDERS}/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.URL_ORDERS}/${id}`);
  }
}
