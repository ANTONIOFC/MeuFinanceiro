import { AcaoService } from '../services/acao.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AcaoUsuario } from '../models/acoes-usuario';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AcaoUsuarioResolver implements Resolve<AcaoUsuario>{

    constructor(private acaoService: AcaoService){}

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.paramMap.get('id');
        return this.acaoService.obterAcaoUsuario(+id);
    }
}
