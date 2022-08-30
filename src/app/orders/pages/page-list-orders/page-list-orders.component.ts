import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  title = '📦 Orders';

  URL_ORDERS = environment.urlApi + 'orders';
  orderList!: Order[];

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
    this.ordersService
      .collection
      .subscribe((data) => {
        this.orderList = data;
      });
  }

  ngOnInit(): void {}


  ngOnChanges(){

  }
}
