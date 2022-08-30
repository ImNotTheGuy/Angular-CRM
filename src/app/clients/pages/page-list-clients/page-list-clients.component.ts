import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  title = '💃🏽 Clients';

  URL_CLIENTS = 'http://localhost:3000/clients';

  clientList !: Client[];
  properties: any;
  headers = ['state', 'tva', 'id', 'name', 'totalCaHt', 'comment'];

  constructor(private clientsService: ClientsService) {
    this.clientsService
      .collection
      .subscribe((data) => {
        this.clientList = data;
        console.log(this.clientList); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
      });
  }

  ngOnInit(): void {}
}
