import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Notify } from 'src/app/models/notify.model';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as moment from "moment";

@Component({
  selector: 'app-open-locker',
  templateUrl: './open-locker.component.html',
  styleUrls: ['./open-locker.component.sass']
})
export class OpenLockerComponent implements OnInit {

  user: any

  password: FormControl = new FormControl('')

  subscriptions: Subscription[] = []

  keys = [1,2,3,4,5,6,7,8,9,0,'Borrar']

  password_success: string = moment().format('DDMM')

  constructor(
    private _sharedService: SharedService,
    private _loginService: LoginService,
    private _router: Router,
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  ngOnDestroy(): void {
    console.log('eliminando subscriptions, ', this.subscriptions.length)
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe()
    )
  }

  getUserData(): void {
    this.user = JSON.parse(localStorage.getItem('user')!.toString())
    this.user.casillas.map((casilla: any) => {
      casilla.input_form = new FormControl('')
    })
  }

  openLoker(): void {
    this._sharedService.showLoader(true)
    this.subscriptions.push(
      this._loginService.openLocker().subscribe(
        data => {
          console.log(data)
          if(data.type == -1) {
            // this._sharedService.showNotifyWarning(data.data.message)
            this._notifyService.emmiterShowNotify(new Notify(
              'Upps',
              data.data.message,
              true
            ))

          }
          else {
            if(data.data && data.data.is_open == false) this._sharedService.showNotifySuccess('Locker cerrado.')
            else this._sharedService.showNotifySuccess('Locker abierto correctamente.')
          }
          this._sharedService.showLoader(false)
        },
        error => {
          this._sharedService.showLoader(false)
          this._sharedService.showNotifySuccess('No se pudo abrir el Locker #0986345.')
          console.log(error)
        }
      )
    )
  }

  open(): void {
    let user = JSON.parse(localStorage.getItem('user') ?? '');

    let data = {
      codigo: user.codigo,
      numeroIdentificacion: user.identification,
      clave: user.clave
    }

    this._sharedService.showLoader(true)
    this._loginService.openLockerHttp(data).subscribe(
      (data: any) => {
        this._sharedService.showLoader(false)


        if(data.status) {
          this._notifyService.emmiterShowNotify(new Notify(
            'Upps',
            data.message,
            true
          ))
          console.log(data.message)
        }
        if(!data.status) {
          this._notifyService.emmiterShowNotify(new Notify(
            'Upps',
            data.message,
            true
          ))
          console.log(data.message)
        }

      },
      (error: any) => {
        this._notifyService.emmiterShowNotify(new Notify(
          'Upps',
          error,
          true
        ))
        this._sharedService.showLoader(false)
        console.log(error)
      }
    )
  }

  openIot(casilla: any): void {
    let user = JSON.parse(localStorage.getItem('user') ?? '');

    let data = {
      device_id: "cotalocker",
      locker_name: "cotalocker",
      box_name: casilla.id
  }

    this._sharedService.showLoader(true)
    this._loginService.openLockerHttpIot(data).subscribe(
      (data: any) => {
        this._sharedService.showLoader(false)
        if(data.status) {
          this._notifyService.emmiterShowNotify(new Notify(
            '¡Muy bien!',
            data.message,
            true
          ))
          console.log(data.message)
        }
        if(!data.status) {
          this._notifyService.emmiterShowNotify(new Notify(
            'Upps',
            data.message,
            true
          ))
          console.log(data.message)
        }

      },
      (error: any) => {
        this._notifyService.emmiterShowNotify(new Notify(
          'Upps',
          error,
          true
        ))
        this._sharedService.showLoader(false)
        console.log(error)
      }
    )
  }

  pressBtn(casilla: any, key: any): void {
    if(key == 'Borrar') {
      let pass: string = casilla.value      
      pass = pass.substring(0, (pass.length-1))
      casilla.setValue(pass)
    } else {
      casilla.setValue(`${casilla.value}${key}`)
    }
  }

}
