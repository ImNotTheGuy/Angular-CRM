import { StateClient } from "../enums/state-client";

export class Client {
  state!: StateClient;
  tva!: number;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment!: string;

  constructor(client?: Partial<Client>){

    if (client){
      Object.assign(this, client);
    }
  }
}
