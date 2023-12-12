import { Component } from "@angular/core";
import { Personaje } from "../interfaces/personajes.interfaces";
import { DbzService } from '../services/dbz.service';

@Component({
  selector:"app-dbz-main-page",
  templateUrl:"./main-page.component.html"
})

export class MainPageComponent{

  constructor(public dbzService:DbzService){}

  get personajes():Personaje[]{
    return this.dbzService.personajes
  }

  onNewPersonaje(personaje:Personaje){
    this.dbzService.newPersonaje(personaje)
  }
  onDeletePersonajeById(id:string){
    this.dbzService.deletePersonajeById(id)
  }
}
