import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  navIsOpen:boolean=true;

  constructor() { }

  ngOnInit(): void {
    this.navIsOpen=true;
  }

  toggle(): boolean{
    this.navIsOpen = !this.navIsOpen;
    return this.navIsOpen;
  }

}
