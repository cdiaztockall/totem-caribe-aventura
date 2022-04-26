import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notify } from 'src/app/models/notify.model';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  $showNotifySubjet: Subject<Notify> = new Subject()

  constructor() { }

  emmiterShowNotify(notify: Notify): void {
    this.$showNotifySubjet.next(notify)
  }

  getSubjetNotify = () => this.$showNotifySubjet

}
