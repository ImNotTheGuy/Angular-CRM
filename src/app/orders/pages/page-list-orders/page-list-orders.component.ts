import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  title = '📦 Orders';


  orderList!: Order[];
  collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );
  states = Object.values(StateOrder);

  currentStateClass!: string;

  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.ordersService.collection.subscribe((data) => {
      this.collection$.next(data);
    });
  }

  changeState(order: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newState = target.value as StateOrder;
    this.ordersService.changeState(order, newState).subscribe((res) => {
      Object.assign(order, res);
    });

  }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('something changed !');
  }

  goToEdit(order: Order){
    this.router.navigate(['orders/edit/', order.id]);
  }

  deleteById(id: number) {
    this.ordersService.deleteById(id).subscribe();
    this.ordersService.refreshCollection();
  }

  

}
