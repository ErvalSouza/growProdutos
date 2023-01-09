import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto.Interface';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos:Produto[] = []


  data = new Date
dia = this.data.getDate()
mes = this.data.getMonth() +1
ano = this.data.getFullYear()







  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos()


  }

getProdutos(){
  this.produtoService.get().subscribe((produtos)=>{
this.produtos=produtos

  })
}



}
