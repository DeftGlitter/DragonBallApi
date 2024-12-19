import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonaje, Item } from '../core/models/IPersonaje.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  basePersonaje = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getAllPersonajes(): Observable<IPersonaje> {
    return this.http.get<IPersonaje>(this.basePersonaje);
  }

  getPersonajeById(id: number): Observable<Item> {
    return this.http.get<Item>(this.basePersonaje + '/' + id);
  }
}
