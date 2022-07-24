import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient) { }

  public getUsers() {
    return this.http.get(`${this.url}/users?per_page=10`)
    .pipe(
      map(
        (resp: any) => {
          return resp.data;
        }
      )
    )
  }
}
