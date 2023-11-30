import { Component } from "@angular/core";
import { Personaje } from "../interfaces/personajes.interfaces";

@Component({
  selector:"app-dbz-main-page",
  templateUrl:"./main-page.component.html"
})

export class MainPageComponent{
  public personajes:Personaje[] =[
    {
      nombre:"Goku",
      fuerza:10000
    },{
      nombre:"Vegeta",
      fuerza: 9000
    },{
      nombre:"Trunks",
      fuerza: 7000
    }
  ]
  onNewPersonaje(personaje:Personaje){
    this.personajes.push(personaje)
  }
  onDeletePersonaje(index:number){
    this.personajes.splice(index,1)
  }
}
