import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AcaoUsuario } from '../models/acoes-usuario';
import { AcaoService } from '../services/acao.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class AcoesUsuarioResolver implements Resolve<AcaoUsuario[]> {

    constructor(private acaoService: AcaoService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<AcaoUsuario[]> {
        return this.acaoService.listarAcoesUsuario();
    }
}