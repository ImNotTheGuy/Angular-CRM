import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  constructor() { }

  @Input() title = 'Nothing defined';
  @Input() columns = [];
  @Input() dataList = [];

  ngOnInit(): void {

  }

}
