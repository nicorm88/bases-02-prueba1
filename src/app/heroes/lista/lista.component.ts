import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  private nombreInstituto:string="IES Playamar";
  private selector:boolean=true;
  private localidad:string="Torremolinos";
  private familiasProfesionales:string[]=["Informática y Comunicaciones", "Transporte y Mantenimiento"];

  presionBotonCambiarCentro(){
    this.selector=!this.selector;
    this.cambiarCentroInformacion();
  }

  cambiarCentroInformacion(){
    if(this.selector){
      this.nombreInstituto="IES Playamar";
      this.localidad="Torremolinos";
      this.familiasProfesionales=["Informática y Comunicaciones", "Transporte y Mantenimiento"];
    }else{
      this.nombreInstituto="IES Jacaranda";
      this.localidad="Churriana";
      this.familiasProfesionales=["Hosteleria y Turismo"];
    }
  }

  getRutaLogo():string{
    if(this.selector){
      return  "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"
    }else{
      return  "https://www.juntadeandalucia.es/averroes/centros-tic/41700853/helvia/sitio/upload/img/logo_jaca2.jpg"
    }
  }

  getNombreInstituto():string{
    return this.nombreInstituto;
  }

  getLocalidad():string{
    return this.localidad;
  }

  getFamiliasProfesionales():string[]{
    return this.familiasProfesionales;
  }
}
