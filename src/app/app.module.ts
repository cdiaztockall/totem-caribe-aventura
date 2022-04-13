import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from 'src/app/components/layout/menu/menu.component';
import { SplashComponent } from 'src/app/components/layout/splash/splash.component';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    SplashComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle'
        },
        vertical: {
          position: 'top'
        }
      },
      behaviour: {
        showDismissButton: false,
        autoHide: 3000
      }
    })

    // LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
