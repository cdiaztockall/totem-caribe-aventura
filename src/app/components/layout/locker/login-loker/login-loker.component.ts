import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-loker',
  templateUrl: './login-loker.component.html',
  styleUrls: ['./login-loker.component.sass']
})
export class LoginLokerComponent implements OnInit {

  keyBoard: any = [
    ['1','2','3','4','5','6','7','8','9','0', 'BORRAR'],
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Ñ'],
    ['Z','X','C','V','B','N','M'],
  ]

  cc = new FormControl('')
  password = new FormControl('')

  inputSelected: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  writeKey(key: string): void {
    if(this.inputSelected == 1) {
      if(key == 'BORRAR') this.cc.setValue(this.cc.value.substr(0, this.cc.value.length - 1))
      else {
        let rNumber = /^[0-9]$/;
        if(rNumber.test(key) && this.cc.value.length < 10) this.cc.setValue(this.cc.value.concat(key))
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

}
