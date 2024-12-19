import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { DetailPersonajeComponent } from './components/detail-personaje/detail-personaje.component';

const routes: Routes = [
  { path: '', component: PersonajesListComponent },
  { path: 'detail/:id', component: DetailPersonajeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesRoutingModule {}
