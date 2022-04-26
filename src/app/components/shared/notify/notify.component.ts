import { Component, OnInit } from '@angular/core';
import { Notify } from 'src/app/models/notify.model';
import { NotifyService } from 'src/app/services/notify/notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.sass']
})
export class NotifyComponent implements OnInit {

  notify: Notify = Notify.empyNotify()

  constructor(
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.listenerNotify()
  }

  close(): void {
    this._notifyService.emmiterShowNotify(Notify.closeNotify())
  }

  listenerNotify(): void {
    this._notifyService.getSubjetNotify().asObservable().subscribe(
      data => this.notify = data
    )
  }

}
