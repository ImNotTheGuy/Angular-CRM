import { StateOrder } from "../enums/state-order"

export interface OrderI {
  id: number;
  client: string;
  comment: string;
  nbJours: number;
  state: StateOrder;
  tjmHt: number;
  tva: number;
  typePresta: string;
}
