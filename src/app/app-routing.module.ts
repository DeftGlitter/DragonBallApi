import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesModule } from './modules/Personajes/personajes.module';

const routes: Routes = [
  { path: '', redirectTo: 'PersonajesList', pathMatch: 'full' },
  {
    path: 'PersonajesList',
    loadChildren: () =>
      import('./modules/Personajes/personajes.module').then(
        (m) => m.PersonajesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PersonajesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
