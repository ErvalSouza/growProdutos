import { MensagemService } from './../../services/mensagem.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto.Interface';

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ProdutoExcluirComponent implements OnInit {

  produto!: Produto
  constructor(private produtoService:ProdutoService,
    private route: ActivatedRoute,
     private router: Router,
     private mensagemService: MensagemService) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')

    this.produtoService.getById(id!).subscribe((produto)=>{
      this.produto = produto
    })
  }

  deletarProduto():void{
this.produtoService.excluir(`${this.produto.id}`).subscribe(()=>{
this.mensagemService.add("Produto Excluido com Sucesso")
this.router.navigate(['produtos'])
})
  }

cancelar(){
  this.router.navigate(['produtos'])
}

}
