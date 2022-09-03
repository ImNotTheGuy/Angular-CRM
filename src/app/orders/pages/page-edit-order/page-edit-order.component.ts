import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {

  id!: number;
  @Input() order!: Order;
  order$!: Observable<Order>



  constructor(
    private orderService: OrdersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.order$ = this.orderService.getById(this.id);

    this.orderService.getById(this.id).subscribe((res) => {
      this.order = res;
      console.log('this.order :>> ', this.order);
    });
  }

  ngOnInit(): void {}

  ngOnChanges() {}

  update(order: Order) {
    this.orderService.addOrUpdate(order).subscribe(() => {
      this.router.navigate(['/orders']);
    });
  }
}
