import { Router } from '@angular/router';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioCadastrado } from 'src/app/UsuarioCadastrado.Interface';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioCadastrado:UsuarioCadastrado ={
    email:"",
    senha:""
  }

  constructor(
    private autenticacaoService:AutenticacaoService,
    private router:Router,
    private mensagem: MensagemService,
    ) { }

  ngOnInit(): void {
  }


  fazerLogin(){

this.autenticacaoService.fazerLogin(this.usuarioCadastrado)

this.router.navigate(['produtos'])

  }


  cancelar(){
    this.router.navigate([""])
  }
}
