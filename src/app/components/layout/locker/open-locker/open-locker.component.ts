import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-open-locker',
  templateUrl: './open-locker.component.html',
  styleUrls: ['./open-locker.component.sass']
})
export class OpenLockerComponent implements OnInit {

  user: any

  constructor(
    private _sharedService: SharedService,
    private _loginService: LoginService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(): void {
    this.user = JSON.parse(localStorage.getItem('user')!.toString())
  }

  openLoker(): void {
    this._sharedService.showLoader(true)
    this._loginService.openLocker().subscribe(
      data => {
        this._sharedService.showLoader(false)
        console.log(data)
      }
    )
  }

}
