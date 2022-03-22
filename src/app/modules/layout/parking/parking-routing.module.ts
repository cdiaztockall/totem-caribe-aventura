import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ParkingComponent } from 'src/app/components/layout/parking/parking.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
