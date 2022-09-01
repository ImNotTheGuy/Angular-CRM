import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  URL_CLIENTS = environment.urlApi + 'clients';

  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(this.URL_CLIENTS).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  get collection() {
    return this.collection$;
  }

  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  changeState(order: Client, newState: StateClient) {
    const newOrder = new Client(order);
    newOrder.state = newState;
    return this.update(newOrder);
  }

  update(newClient: Client) {
    return this.http.put<Client>(`${this.URL_CLIENTS}/${newClient.id}`, newClient);
  }
}
