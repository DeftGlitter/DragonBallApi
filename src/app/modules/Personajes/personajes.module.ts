import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { PersonajeCardComponent } from './components/personaje-card/personaje-card.component';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonDetailCardComponent } from './components/button-detail-card/button-detail-card.component';
import { DetailPersonajeComponent } from './components/detail-personaje/detail-personaje.component';

@NgModule({
  declarations: [PersonajesListComponent, PersonajeCardComponent, ButtonDetailCardComponent, DetailPersonajeComponent],
  imports: [CommonModule, PersonajesRoutingModule, HttpClientModule],
})
export class PersonajesModule {}
