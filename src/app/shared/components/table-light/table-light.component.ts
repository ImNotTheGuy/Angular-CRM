import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() tableData!: any[];
  @Input() headers!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){

  }

}
