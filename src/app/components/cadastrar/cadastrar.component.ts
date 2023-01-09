import { MensagemService } from 'src/app/services/mensagem.service';
import { Router } from '@angular/router';
import {  UsuarioCadastrarService } from 'src/app/services/UsuarioCadastrar.service';
import { NovoUsuario } from '../../NovoUsuario.Interface';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  novoUsuario: NovoUsuario = {
    id: "",
    nomeCompleto: "",
    email: "",
    senha: "",
    termos: false
  }
  constructor(
    private usuarioCadastrar: UsuarioCadastrarService,
    private router: Router,
    private mensagem: MensagemService,
    ) { }
  ngOnInit(): void {
  }



  cadastrar(){
this.usuarioCadastrar.cadastrarUsuario(this.novoUsuario).subscribe(()=>{
  console.log(this.novoUsuario)
  this.mensagem.add("Usuario Cadastrado com Sucesso")
  this.router.navigate(['/login'])
})
  }

  cancelar(){
    this.router.navigate([""])
  }
}
