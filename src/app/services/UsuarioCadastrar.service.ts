import { UsuarioCadastrado } from 'src/app/UsuarioCadastrado.Interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from '../Produto.Interface';
import { NovoUsuario } from '../NovoUsuario.Interface';

@Injectable({
  providedIn: 'root'
})

export class UsuarioCadastrarService {
  baseUrl= "http://localhost:3001/UsuariosCadastrados"


  constructor(private http: HttpClient) { }

  cadastrarUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario>{
    return this.http.post<NovoUsuario>(this.baseUrl, novoUsuario)
  }


}
