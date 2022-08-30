import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {

  URL_CLIENTS = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  getListClients() {
    return this.http.get(this.URL_CLIENTS);
  }
}
