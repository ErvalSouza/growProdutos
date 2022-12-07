import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosCriarComponent } from './components/produtos-criar/produtos-criar.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FormProdutoComponent } from './components/form-produto/form-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { ProdutoEditarComponent } from './components/produto-editar/produto-editar.component';
import { ProdutoExcluirComponent } from './components/produto-excluir/produto-excluir.component';
import { ProdutoVencerComponent } from './components/produto-vencer/produto-vencer.component';


import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProdutosCriarComponent,
    ProdutosComponent,
    FormProdutoComponent,
    MensagemComponent,
    ProdutoEditarComponent,
    ProdutoExcluirComponent,
    ProdutoVencerComponent,
    LoginComponent,
    CadastrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
