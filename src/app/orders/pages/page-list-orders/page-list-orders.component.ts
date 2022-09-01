import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  collection$!: Observable<Order[]>;
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

  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection;
  }

  changeState(order: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newState = target.value as StateOrder;
    this.ordersService.changeState(order, newState).subscribe((res) => {
      Object.assign(order, res);
    });

  }

  ngOnInit(): void {}

  ngOnChanges() {}
}
