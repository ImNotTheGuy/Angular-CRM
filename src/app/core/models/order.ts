import { StateOrder } from "../enums/state-order";

export class Order {

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

}
