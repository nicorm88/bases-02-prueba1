import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Trabajando con Angular';

  constructor(private router: Router) {}

  cambiarContenido(componente: string) {
    this.router.navigate(['/contenido', componente]);
  }
}


