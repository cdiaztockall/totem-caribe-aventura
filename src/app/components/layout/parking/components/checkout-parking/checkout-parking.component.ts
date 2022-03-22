import { Component, OnInit } from '@angular/core';

// Services
import { ParkingService } from 'src/app/services/parking/parking.service';

@Component({
  selector: 'app-checkout-parking',
  templateUrl: './checkout-parking.component.html',
  styleUrls: ['./checkout-parking.component.sass']
})
export class CheckoutParkingComponent implements OnInit {

  openCheckOut: boolean = false

  constructor(
    private _parkingService: ParkingService
  ) { }

  ngOnInit(): void {
    this.listenObservables()
  }

  closeWindow(): void {
    this.openCheckOut = false
  }

  listenObservables(): void {
    this._parkingService.getSubgetOpenCheckOut().asObservable().subscribe(
      data => this.openCheckOut = data
    )
  }

}
