import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'totem-caribe-aventura';

  constructor(
    private _router: Router
  ) { }

  goHome(): void {
    this._router.navigate(['/menu'])
  }

}
