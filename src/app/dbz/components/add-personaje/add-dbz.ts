import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interfaces';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-dbz.html'
})
export class AddDBZComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter()

  public personaje:Personaje={
    id:"",
    nombre:"",
    fuerza:null
  }
  addPersonaje(){
    if(this.personaje.nombre.length>0 && this.personaje.id!=null && this.personaje.fuerza!=null){
      this.onNewPersonaje.emit(this.personaje)
      this.personaje={id:"",nombre:"",fuerza:null}
    }
  }
}
