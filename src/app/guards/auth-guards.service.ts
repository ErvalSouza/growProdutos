import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private autenticacaoService:AutenticacaoService , private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ):
  Observable<boolean> | boolean  {
    if(this.autenticacaoService.usuarioEstaAutenticado()){
      return true
    }
this.router.navigate(['/login'])
    return false
  }
}
