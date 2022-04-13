import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  $subjetLoader: Subject<boolean> = new Subject()

  constructor(
    private _notifier: NotifierService
  ) { }

  showLoader = (action: boolean = true) => this.$subjetLoader.next(action)

  getSubjetLoader = () => this.$subjetLoader

  showNotifySuccess(message: string): void {
    this._notifier.notify('success', message)
  }

  showNotifyWarning(message: string): void {
    this._notifier.notify('warning', message)
  }

  showNotifyError(message: string): void {
    this._notifier.notify('error', message)
  }

}
