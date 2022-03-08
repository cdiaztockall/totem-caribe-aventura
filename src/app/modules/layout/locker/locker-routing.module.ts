import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LockerComponent } from 'src/app/components/layout/locker/locker.component';
import { LoginLokerComponent } from 'src/app/components/layout/locker/login-loker/login-loker.component';

const routes: Routes = [
  {
    path: '',
    component: LockerComponent
  },
  {
    path: 'login',
    component: LoginLokerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerRoutingModule { }
