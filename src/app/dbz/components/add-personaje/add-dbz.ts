import { Component, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-dbz.html'
})
export class AddDBZComponent {
  public personaje:Personaje={
    nombre:"",
    fuerza:0
  }
}
