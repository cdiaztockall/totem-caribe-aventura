import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      name: 'Manilla',
      image: '/assets/imgs/manilla.svg',
      route: ''
    },
    {
      name: 'Biometria',
      image: '/assets/imgs/biometria.svg',
      route: ''
    },
    {
      name: 'Contraseña',
      image: '/assets/imgs/contrasena.svg',
      route: 'menu/locker/login'
    },
  ]

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string): void {
    this._router.navigate([route])
  }

}
