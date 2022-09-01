import { Directive, HostBinding, Input } from '@angular/core';
import { StateOrder as stateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Directive({
  selector: '[appState]'
})
export class StateDirective {


  @Input() state!: string;
  @HostBinding('class') tdClassName!: string;
  stateClassMap = new Map();


  constructor() {
    this.stateClassMap.set('CONFIRMED', 'state-success');
    this.stateClassMap.set('OPTION', 'state-warning');
    this.stateClassMap.set('CANCELLED', 'state-danger');
    this.stateClassMap.set('ACTIVE', 'state-success');
    this.stateClassMap.set('INACTIVE', 'state-danger');
  }

  ngOnInit(){
  }

  ngOnChanges(){
    this.tdClassName = this.stateClassMap.get(this.state);
    console.log(this.state, 'model');
  }

}
