import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  private nombre:string="";
  private edad:number=0;

  getNombre():string{
    return this.nombre;
  }
  getEdad():number{
    return this.edad;
  }
  setNombre(nombre:string):void{
    this.nombre=nombre;
  }
  setEdad(edad:string):void{
    this.edad=Number(edad);
  }
  nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  restablecer():void{
    this.nombre="";
    this.edad=0;
  }
}
