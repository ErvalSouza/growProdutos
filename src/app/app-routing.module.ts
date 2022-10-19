import { AuthGuardsService } from './guards/auth-guards.service';
import { LoginComponent } from './components/login/login.component';
import { ProdutoExcluirComponent } from './components/produto-excluir/produto-excluir.component';
import { ProdutoEditarComponent } from './components/produto-editar/produto-editar.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutosCriarComponent } from './components/produtos-criar/produtos-criar.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
{path: "", component:HomeComponent},
{path: "produtos", component:ProdutosComponent, canActivate:[AuthGuardsService]},
{path: "login", component:LoginComponent},
{path: "produtos/criar", component:ProdutosCriarComponent, canActivate:[AuthGuardsService]},
{path: "produtos/editar/:id", component:ProdutoEditarComponent, canActivate:[AuthGuardsService]},
{path: "produtos/excluir/:id", component:ProdutoExcluirComponent, canActivate:[AuthGuardsService]},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
