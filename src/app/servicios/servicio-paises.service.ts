import { Injectable } from '@angular/core';
// Cuando queremos consumir una api rest tenemos q importar esto
import { Observable } from 'rxjs'; //Para suscribirse a lo q devuelva

/*
  Cuando impotamos el http, tenemos que importar en el app.module el
  HttpClientModule, NO OLVIDARSE DE ESO !
 */
import { HttpClient } from "@angular/common/http";
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  linkApiPaises: string = 'https://restcountries.eu/rest/v2/all';

  //No se declara el http como un atributo, lo inyectamos de una
  constructor(private http: HttpClient) { }

  // No olvidar que cuando hacemos el
  // this.http.get PONER antes de los (), el tipo de valor que retornamos
  // getPaises(region: string): Observable<any[]>{
  //   return this.http.get<Pais[]>(`/region${this.linkApiPaises}/${region}`);
  // }
  getPaises(): Observable<any[]>{
    return this.http.get<Pais[]>(this.linkApiPaises);
  }
}
