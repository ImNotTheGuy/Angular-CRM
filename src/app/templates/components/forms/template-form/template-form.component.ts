import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  @Input() properties!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
