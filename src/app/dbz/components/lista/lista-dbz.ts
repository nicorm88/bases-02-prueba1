import { Component,Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista-dbz.html'
})
export class ListaDBZComponent {
  @Input()
  public listaPersonajes: Personaje[] = []
}
