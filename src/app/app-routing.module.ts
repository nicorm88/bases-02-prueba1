// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './heroes/lista/lista.component';

const routes: Routes = [
  { path: './heroe.component', component: HeroeComponent },
  { path: './contador.component', component: ContadorComponent },
  { path: './lista.component', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
