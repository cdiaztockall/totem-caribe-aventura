import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Notify } from 'src/app/models/notify.model';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-login-loker',
  templateUrl: './login-loker.component.html',
  styleUrls: ['./login-loker.component.sass']
})
export class LoginLokerComponent implements OnInit {

  keyBoard: any = [
    ['.','_','-','*',',','@','$','&', 'BORRAR'],
    ['1','2','3','4','5','6','7','8','9','0'],
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Ñ'],
    ['Z','X','C','V','B','N','M']
  ]

  // cc = new FormControl({value: '10678384880', disabled: true})
  // password = new FormControl({value: 'FNRJZ', disabled: true})
  cc = new FormControl({value: '79603322', disabled: true})
  password = new FormControl({value: 'C789S', disabled: true})

  inputSelected: number = 0;

  constructor(
    private _sharedService: SharedService,
    private _loginService: LoginService,
    private _router: Router,
    private _notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.generateToken()
  }

  writeKey(key: string): void {
    if(this.inputSelected == 1) {
      if(key == 'BORRAR') this.cc.setValue(this.cc.value.substr(0, this.cc.value.length - 1))
      else {
        let rNumber = /^[0-9]$/;
        if(rNumber.test(key) && this.cc.value.length < 11) this.cc.setValue(this.cc.value.concat(key))
      }
    }
    if(this.inputSelected == 2) {
      if(key == 'BORRAR') this.password.setValue(this.password.value.substr(0, this.password.value.length - 1))
      else this.password.setValue(this.password.value.concat(key))
    }
  }

  selectInput(input: number): void {
    this.inputSelected = input
  }

  generateToken(): void {
    this._sharedService.showLoader(true)
    this._loginService.generateToken().subscribe(
      data => {
        this._sharedService.showLoader(false)
      },
      error => {
        this._sharedService.showLoader(false)
        // this._sharedService.showNotifyError('No se pudo generar el token.')
        console.log(error)
      }
    )
  }

  login(): void {
    let data = {
      cc: this.cc.value,
      code: this.password.value
    }
    this._sharedService.showLoader(true)
    this._loginService.login(data).subscribe(
      (data: any) => {
        this._sharedService.showLoader(false)
        console.log(data)
        if(data.status) {
          localStorage.setItem('user', JSON.stringify(data.user))
          this._router.navigate(['/menu/locker/open'])
        }

        if(!data.status) {
          // this._sharedService.showNotifyWarning(data.message)
          this._notifyService.emmiterShowNotify(new Notify(
            'Upps',
            data.message,
            true
          ))
          console.log(data.message)
          // this._sharedService.showNotifyWarning(data.message)
        }

      }
    )
  }

}
