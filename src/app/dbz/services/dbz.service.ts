import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes:Personaje[] =[
    {
      id:uuid(),
      nombre:"Goku",
      fuerza:10000
    },{
      id:uuid(),
      nombre:"Vegeta",
      fuerza: 9000
    },{
      id:uuid(),
      nombre:"Trunks",
      fuerza: 7000
    }
  ]
  newPersonaje(personaje:Personaje){
    personaje.id=uuid()
    this.personajes.push(personaje)
  }
  //onDeletePersonaje(index:number){
  //  console.log(this.personajes.splice(index,1))
  //}
  deletePersonajeById(id:string){
    this.personajes = this.personajes.filter ( personaje => personaje.id !== id )
  }
}
