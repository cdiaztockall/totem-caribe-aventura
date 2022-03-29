import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  showLoader: boolean = false

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.listenLoader()
  }

  listenLoader(): void {
    this._sharedService.getSubjetLoader().asObservable().subscribe(
      data => this.showLoader = data
    )
  }

}
