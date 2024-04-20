import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styles: ``
})
export class ErrorComponent {

  constructor(private router:Router){}
  redirct()
  {
    this.router.navigate(['students'])
  }
}
