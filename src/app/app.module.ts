import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { InstitutoComponent } from './institutos/instituto.component';
import { HeroesModule } from './heroes/components/heroes.module';



@NgModule({
  declarations: [
    AppComponent,ContadorComponent, InstitutoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
