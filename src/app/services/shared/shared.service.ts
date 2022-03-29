import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  $subjetLoader: Subject<boolean> = new Subject()

  constructor() { }

  showLoader = (action: boolean = true) => this.$subjetLoader.next(action)

  getSubjetLoader = () => this.$subjetLoader

}
