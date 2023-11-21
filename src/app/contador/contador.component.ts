import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl:'./contador.component.html'
})
export class ContadorComponent{
  public contador: number = 0;
  public num1:number=2;

  reset():void{
    this.contador=0;
  }

  sumarContador(num:string):void {
    this.contador+=Number(num);
  }
  restarContador(num:string):void {
    this.contador-=Number(num);
  }
}
