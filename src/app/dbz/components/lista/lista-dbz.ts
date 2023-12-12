import { Component,Input,EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista-dbz.html'
})
export class ListaDBZComponent {
  @Input()
  public listaPersonajes: Personaje[] = []

  @Output()
  public onDeletePersonajeById: EventEmitter<string> = new EventEmitter()

  deletePersonaje(id:string){
    this.onDeletePersonajeById.emit(id)
  }
}
