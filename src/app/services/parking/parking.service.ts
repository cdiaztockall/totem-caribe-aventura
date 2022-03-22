import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  $subjectOpenCheckOut: Subject<boolean> = new Subject()

  constructor() { }

  emitterOpenCheckOut(action: boolean) {
    return this.$subjectOpenCheckOut.next(action)
  }

  getSubgetOpenCheckOut = () => this.$subjectOpenCheckOut;

}
