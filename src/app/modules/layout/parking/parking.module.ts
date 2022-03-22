import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';

import { ParkingComponent } from '../../../components/layout/parking/parking.component';
import { InputPlacaComponent } from '../../../components/layout/parking/components/input-placa/input-placa.component';
import { CheckoutParkingComponent } from '../../../components/layout/parking/components/checkout-parking/checkout-parking.component';


@NgModule({
  declarations: [
    ParkingComponent,
    InputPlacaComponent,
    CheckoutParkingComponent
  ],
  imports: [
    CommonModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }
