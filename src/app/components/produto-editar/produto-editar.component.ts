import { MensagemService } from 'src/app/services/mensagem.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto.Interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produto!:Produto

  constructor(private produtoService:ProdutoService,
    private router: Router,
    private route:ActivatedRoute,
    private mensagemService: MensagemService,
    ) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')
this.produtoService.getById(id!).subscribe((produto)=>{
  this.produto = produto
})
  }

  atualizarProduto(): void{
this.produtoService.atualizar(this.produto).subscribe(()=>{
this.mensagemService.add("Produto Atualizado com Sucesso")
this.router.navigate(['produtos'])
})
  }

  cancelar(){
    this.router.navigate(['produtos'])
  }
}
