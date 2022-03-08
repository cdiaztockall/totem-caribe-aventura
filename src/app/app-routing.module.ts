import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from 'src/app/components/layout/menu/menu.component';
import { SplashComponent } from 'src/app/components/layout/splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'menu/locker',
    loadChildren: () => import('./modules/layout/locker/locker.module').then(m => m.LockerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
