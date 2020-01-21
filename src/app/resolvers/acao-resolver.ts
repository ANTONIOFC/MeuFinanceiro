import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AcaoService } from '../services/acao.service';
import { Acao } from '../models/acao';

@Injectable({
    providedIn: 'root'
  })
export class AcaoResolver {
    constructor(private acaoService: AcaoService) { }

    resolve(route: ActivatedRouteSnapshot) : Observable<Acao> {
      let id = route.paramMap.get('id');
      return this.acaoService.obter(+id);
    }
}
