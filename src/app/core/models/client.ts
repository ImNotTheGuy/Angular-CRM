import { StateClient } from "../enums/state-client";

export class Client {

  state = StateClient.ACTIVE;
  tva = 20;
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
