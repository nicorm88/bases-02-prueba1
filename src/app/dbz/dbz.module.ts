import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaDBZComponent } from './components/lista/lista-dbz';
import { AddDBZComponent } from './components/add-personaje/add-dbz';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,ListaDBZComponent,AddDBZComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
