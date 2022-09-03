import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {

  states = Object.values(StateClient);
  @Input() client!: Client;
  @Output() onSubmitEvent = new EventEmitter<Client>();

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: [this.client.id],
      state: [this.client.state, Validators.required],
      tva: [this.client.tva, Validators.required],
      name: [this.client.name, Validators.required],
      totalCaHt: [this.client.totalCaHt, Validators.required],
      comment: [this.client.comment, Validators.required],
    });
  }

  public onSubmit() {
    console.log('this.formGroup.value :>> ', this.formGroup.value);
    this.onSubmitEvent.emit(this.formGroup.value);
  }
}
