import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from 'src/app/models/notify.model';

// Services
import { NotifyService } from 'src/app/services/notify/notify.service';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.sass']
})
export class LockerComponent implements OnInit {

  itemsMenu: {
    name: string,
    image: string,
    route: string
  }[] = [
    {
      name: 'Contraseña',
      image: '/assets/imgs/contrasena.svg',
      route: 'menu/locker/login'
    },
    {
      name: 'Manilla',
      image: '/assets/imgs/manilla.svg',
      route: ''
    },
    {
      name: 'Biometria',
      image: '/assets/imgs/biometria.svg',
      route: ''
    },
  ]

  constructor(
    private _router: Router,
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string): void {
    if(route == '') {
      this._notifyService.emmiterShowNotify( new Notify(
        'Prueba',
        'Funcionalidad en desarrollo.',
        true
      ))
    } else {
      this._router.navigate([route])
    }
  }

}
