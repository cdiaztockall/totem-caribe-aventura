import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from 'src/app/components/layout/menu/menu.component';
import { SplashComponent } from 'src/app/components/layout/splash/splash.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

    // LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
