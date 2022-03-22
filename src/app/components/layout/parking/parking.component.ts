import { Component, OnInit } from '@angular/core';

// Services
import { ParkingService } from 'src/app/services/parking/parking.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.sass']
})
export class ParkingComponent implements OnInit {

  options: {
    value: string,
    image: string
  }[] = [
    {
      value: 'Mie 03/02',
      image: '/assets/imgs/calendar.svg'
    },
    {
      value: '13:05:45',
      image: '/assets/imgs/clock.svg'
    }
  ]
  
  constructor(
    private _parkingService: ParkingService
  ) { }

  ngOnInit(): void {
  }

  openCheckOut(): void {
    this._parkingService.emitterOpenCheckOut(true)
  }

}
