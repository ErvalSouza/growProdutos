import { UsuarioCadastrado } from './../UsuarioCadastrado.Interface';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  usuarioAutenticado: boolean = false

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario:UsuarioCadastrado){
    if(usuario.email === "ervalsouza20@gmail.com" && usuario.senha === "123"){
this.usuarioAutenticado = true

this.mostrarMenuEmitter.emit(true)

this.router.navigate([""])
    }
    else{
      this.usuarioAutenticado = false

      this.mostrarMenuEmitter.emit(false)

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
