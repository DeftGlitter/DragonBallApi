import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { PersonajeCardComponent } from './components/personaje-card/personaje-card.component';
import { PersonajesRoutingModule } from './personajes-routing.module';

@NgModule({
  declarations: [PersonajesListComponent, PersonajeCardComponent],
  imports: [CommonModule, PersonajesRoutingModule],
})
export class PersonajesModule {}
