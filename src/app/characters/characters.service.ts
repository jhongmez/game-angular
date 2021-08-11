import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  
  // Agregar un personaje
  addCharacter(data: any) {

    return this.http.post<any>(`${environment.characterURL}`, data)
      .pipe( map( (response: any) => {
        return response;
      }))

  }
  
  // Obtener todos los personajes
  getCharacters() {

    return this.http.get<any>(`${environment.characterURL}`)
      .pipe( map( (response: any) => {
        return response;
      }));

  }
  
  // Actualizar el personaje con su correspondiente ID
  updateCharacter(data: any, id: number) {
    
    return this.http.put<any>(`${environment.characterURL}/${id}`, data)
      .pipe( map( (response: any) => {
        return response;
      }))

  }
  
  // Eliminar personaje
  deleteCharacter(id: number) {
    
    return  this.http.delete<any>(`${environment.characterURL}/${id}`)
      .pipe( map( (response: any) => {
        return response;
      }))

  }

}
