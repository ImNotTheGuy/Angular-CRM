import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {

  behaviorSubject = new BehaviorSubject(1);

  increment() {
    const nextValue = (this.behaviorSubject.value + .1).toFixed(1);
    this.behaviorSubject.next(parseFloat(nextValue));
  }

  constructor() {
  }
}
