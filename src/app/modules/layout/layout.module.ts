import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutRoutingModule } from './layout-routing.module';


// import { MenuComponent } from '../../components/layout/menu/menu.component';
// import { SplashComponent } from '../../components/layout/splash/splash.component';

@NgModule({
  declarations: [
    // MenuComponent,
    // SplashComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,

    LayoutRoutingModule
  ],
  bootstrap: []
})
export class LayoutModule { }
