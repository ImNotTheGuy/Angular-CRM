import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  // @Input() tableData!: any[];
  @Input() headers!: string[];

  valuesList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

}
