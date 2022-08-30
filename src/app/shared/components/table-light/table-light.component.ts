import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  // @Input() tableData!: any[];
  @Input() headers!: string[];

  valuesList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(){
  //   console.log('this.tableData (on changes) :>> ', this.tableData);
  //   console.log('this.headers (on changes) :>> ', this.headers);
  //   this.tableData.forEach(data => {
  //     Object.entries(data).forEach(value => {
  //       this.valuesList.push(data);
  //     })
  //   });
  // }

}
