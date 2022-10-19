import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from '../Produto.Interface';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl= "http://localhost:3001/produtos"


  constructor(private http: HttpClient) { }

criar(produto:Produto) : Observable<Produto>{
  return this.http.post<Produto>(this.baseUrl, produto)
}
get(): Observable <Produto[]>{
return this.http.get<Produto[]>(this.baseUrl)
}


getById(id:string):Observable <Produto>{
  const url = `${this.baseUrl}/${id}`
return this.http.get<Produto>(url)
}

atualizar(produto:Produto): Observable <Produto>{
const url= `${this.baseUrl}/${produto.id}`
return this.http.put<Produto>(url,produto)
}

excluir(id:string): Observable <Produto>{
const url = `${this.baseUrl}/${id}`
return this.http.delete<Produto>(url)
}
}
