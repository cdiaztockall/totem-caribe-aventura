import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent implements OnInit {

  loader: boolean = true;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    
    let resources = ['logo-brand', 'figure-1', 'figure-2', 'figure-3', 'figure-4']
    document.querySelector('#logo-brand')?.addEventListener('load', () => {
      this.loader = false
    })

  }

  loadResources(elements: string[]): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let errors = 0
  
      elements.forEach(async element => {
        
        let result = await new Promise((resolve, reject) => {
          let htmlElement = document.querySelector(`#${element}`)
          if(htmlElement == null || htmlElement == undefined) reject(false)
          htmlElement?.addEventListener('onload', () => resolve(true))
        })
  
        result == false ? errors++ : errors
  
      });

      if(errors == 0) resolve(true)
      if(errors != 0) reject(true)

    })
  }

  goToMenu(): void {
    this._router.navigate(['menu'])
  }

}
