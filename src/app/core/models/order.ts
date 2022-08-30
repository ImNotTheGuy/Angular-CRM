import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interface/order-i";

export class Order implements OrderI {

  nbJours = 1;
  state = StateOrder.OPTION;
  tjmHt = 1200;
  tva = 20;
  id!: number;
  client!: string;
  comment!: string;
  typePresta!: string;

  constructor(order?: Partial<Order>){

    if (order){
      Object.assign(this, order);
    }
  }

  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva / 100);
  }

}
