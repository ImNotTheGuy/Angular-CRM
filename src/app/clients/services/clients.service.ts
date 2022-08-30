import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  URL_CLIENTS = 'http://localhost:3000/clients';

  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(this.URL_CLIENTS);
  }

  get collection() {
    return this.collection$;
  }

  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }
}
