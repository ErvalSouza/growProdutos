import { MensagemService } from './../../services/mensagem.service';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../Produto.Interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produtos-criar',
  templateUrl: './produtos-criar.component.html',
  styleUrls: ['./produtos-criar.component.css']
})
export class ProdutosCriarComponent implements OnInit {

data = new Date
dia = this.data.getDate()
mes = this.data.getMonth() +1
ano = this.data.getFullYear()



@Input() classe = ""



  produto: Produto ={
    nome: "",
    quantidade: "",
    preco: "",
    dia: 0,
    mes: 0,
    ano: 0,
    // dataValidade:""
  }

  constructor(private produtoService: ProdutoService,private mensagemService: MensagemService, private router: Router) { }

  ngOnInit(): void {

  }


  criarProduto(): void {
    if( this.produto.ano < this.ano){
    this.mensagemService.add("O ano não pode ser inferior ao ano atual")
    return
    }


this.produtoService.criar(this.produto).subscribe(()=>{
this.router.navigate(['produtos'])
this.mensagemService.add("Produto Cadastrado com Sucesso")
console.log(this.produto)
})
  }



  cancelar(){
    this.router.navigate(['produtos'])
  }

}
