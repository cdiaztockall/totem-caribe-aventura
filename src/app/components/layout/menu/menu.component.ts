import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  itemsMenu: {name: string, route: string, image: string, color: string}[] = [
    {
      name: 'Recuerdos',
      route: '',
      image: '/assets/imgs/item1.png',
      color: 'linear-gradient(0deg, #7c61ec, #a394f3)'
    },
    {
      name: 'Parqueadero',
      route: 'menu/parking',
      image: '/assets/imgs/item2.svg',
      color: 'linear-gradient(0deg, #f28684, #f2b6b5)'
    },
    {
      name: 'Comidas',
      route: 'https://as-ecommerce-pru.azurewebsites.net/#/empresa/CARIBEAVENTURARESTAURANTES',
      image: '/assets/imgs/item3.svg',
      color: 'linear-gradient(0deg, #45d79e, #9fe2d3)'
    },
    {
      name: 'Lockers',
      route: 'menu/locker',
      image: '/assets/imgs/item4.svg',
      color: 'linear-gradient(0deg, #53b5e5, #85cff3)'
    },
  ]

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(item: any): void {
    if(item.name == 'Comidas'){
      window.location.assign(item.route)
    } else {
      this._router.navigate([item.route])
    }
  }

}
