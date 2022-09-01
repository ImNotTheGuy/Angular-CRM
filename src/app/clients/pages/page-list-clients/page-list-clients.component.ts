import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  title = '💃🏽 Clients';
  states = Object.values(StateClient);

  URL_CLIENTS = environment.urlApi + "/clients/";

  collection!: Client[];
  properties: any;
  headers = [
    'Action',
    'TVA',
    'id',
    'Name',
    'Total CA (HT)',
    'Comment',
    'State'
  ];

  constructor(private clientsService: ClientsService) {
    this.clientsService.collection.subscribe((data) => {
      this.collection = data;
    });

  }

  changeState(client: Client, event: Event) {
    const target = event.target as HTMLSelectElement;
    const newState = target.value as StateClient;
    this.clientsService.changeState(client, newState).subscribe((res) =>{
      Object.assign(client, res);
    });

  }

  ngOnInit(): void {}
}
