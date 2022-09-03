import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { StateClient } from 'src/app/core/enums/state-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  URL_CLIENTS = environment.urlApi + 'clients';

  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  refreshCollection(){
    this.http.get<Client[]>(this.URL_CLIENTS).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    ).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  get collection() {
    return this.collection$;
  }

  set collection(col: Observable<Client[]>) {
  }

  getById(id: number){
    return this.http.get<Client>(`${this.URL_CLIENTS}/${id}`);
  }

  changeState(client: Client, newState: StateClient) {
    const newOrder = new Client(client);
    newOrder.state = newState;
    return this.update(newOrder);
  }

  update(newClient: Client) {
    return this.http.put<Client>(`${this.URL_CLIENTS}/${newClient.id}`, newClient).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  add(client: Client): Observable<Client>{
    return this.http.post<Client>(`${this.URL_CLIENTS}`, client).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );;
  }

  deleteById(id: number){
    return this.http.delete<Client>(`${this.URL_CLIENTS}/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );;
  }


}
