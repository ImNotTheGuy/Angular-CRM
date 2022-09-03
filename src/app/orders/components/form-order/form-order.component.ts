import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {

  states = Object.values(StateOrder);
  @Input() order!: Order;
  @Output() onSubmitEvent = new EventEmitter<Order>();

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: [this.order.id],
      client: [this.order.client, [Validators.required]],
      comment: [this.order.comment],
      nbJours: [this.order.nbJours, [Validators.required]],
      state: [this.order.state, [Validators.required]],
      tjmHt: [this.order.tjmHt, [Validators.required]],
      tva: [this.order.tva, [Validators.required]],
      typePresta: [this.order.typePresta, [Validators.required]],
    });
  }

  
  public onSubmit() {
    this.onSubmitEvent.emit(this.formGroup.value);
  }
}
