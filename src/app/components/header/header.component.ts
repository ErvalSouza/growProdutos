import { AutenticacaoService } from './../../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarMenu: boolean = false

  constructor(private autenticacaoSevice:AutenticacaoService) { }

  ngOnInit(): void {
    this.autenticacaoSevice.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu=mostrar
    )
  }

}
