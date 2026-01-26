import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseJuguetes, Juguete} from '../common/juguetes';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {
  private readonly URLBase= 'https://api-juguetes.vercel.app/api/v2/juguete/';
  private http: HttpClient = inject(HttpClient)
  constructor() { }

  // obtener lista de juguetes con paginacion
  getJuguetesPaged(page: number):
    Observable<ApiResponseJuguetes>{
    return  this.http.get<ApiResponseJuguetes>
    (this.URLBase + 'juguetes?page=' + page)
  }
  // obtener un juguete por id
  getOneJuguete(id: string):
    Observable<Juguete>{
    return  this.http.get<Juguete>
    (this.URLBase + 'juguete/' + id)
  }
  // obtener un juguete por nombre
  getOneJugueteByName(nombre: string):
    Observable<Juguete>{
    return  this.http.get<Juguete>
    (this.URLBase + 'jugueteByName/' + nombre)
  }
  // agregar un juguete nuevo
  addJuguete(juguete: Juguete):Observable<any>{
    return this.http.post(this.URLBase+'juguetes', juguete)
  }
  // actualizar un juguete existente
  updateJuguete(juguete: Juguete):Observable<any>{
    return this.http.patch(this.URLBase+'juguetes', juguete._id)
  }
  // eliminar un juguete por id
  deleteJuguete(id:string):Observable<any>{
    return this.http.delete(this.URLBase+'delete/' + id)
  }
}
