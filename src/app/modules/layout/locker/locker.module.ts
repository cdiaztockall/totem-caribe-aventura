import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LockerRoutingModule } from './locker-routing.module';
import { LockerComponent } from '../../../components/layout/locker/locker.component';
import { LoginLokerComponent } from 'src/app/components/layout/locker/login-loker/login-loker.component';


@NgModule({
  declarations: [
    LockerComponent,
    LoginLokerComponent
  ],
  imports: [
    CommonModule,
    LockerRoutingModule,
    ReactiveFormsModule
  ]
})
export class LockerModule { }
