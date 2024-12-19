import { Component, OnInit } from '@angular/core';
import { IPersonaje, Item } from 'src/app/core/models/IPersonaje.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css'],
})
export class PersonajesListComponent implements OnInit {
  ListaPersonajes: Item[] = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.restService.getAllPersonajes().subscribe((response) => {
      this.ListaPersonajes = response.items;
      console.log(this.ListaPersonajes);
    });
  }
}
