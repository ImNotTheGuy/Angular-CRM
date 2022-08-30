import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(order: Order, tva?: boolean): number {
    return tva ? order.totalTTC() :  order.totalHT();
  }

}
