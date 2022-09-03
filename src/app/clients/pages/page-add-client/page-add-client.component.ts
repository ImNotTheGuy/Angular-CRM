import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  client = new Client();

  headers = [
    'Action',
    'TVA',
    'id',
    'Name',
    'Total CA (HT)',
    'Comment',
    'State'
  ];

  constructor(
    private clientService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  add(client: Client){
    this.clientService.add(client).subscribe(() => {
      this.router.navigate(['clients'])
    })
  }

}
