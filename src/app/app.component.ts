import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from './models/notify.model';
import { NotifyService } from './services/notify/notify.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'totem-caribe-aventura';

  constructor(
    private _router: Router,
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    console.log('Hola app component')
    this.checkConnection()
  }

  goHome(): void {
    this._router.navigate(['/menu'])
  }

  checkConnection(): void {

    window.addEventListener('online', () => {
      this._notifyService.emmiterShowNotify(new Notify(
        'Conexión',
        'Se ha restablecido la conexión.',
        true
      ))
    })
    window.addEventListener('offline', () => {
      this._notifyService.emmiterShowNotify(new Notify(
        'Conexión',
        'Se ha perdido la conexión.',
        true
      ))
    })

  }

}
