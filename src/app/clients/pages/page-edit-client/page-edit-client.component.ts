import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {


  id!: number;
  @Input() client!: Client;
  client$!: Observable<Client>

  constructor(private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.client$ = this.clientService.getById(this.id);

    this.clientService.getById(this.id).subscribe((res) => {
      this.client = res;
    });
    }

  ngOnInit(): void {



  }

  update(client: Client){
    this.clientService.update(client).subscribe(() => {
      this.router.navigate(['clients']);
    })
  }

}
