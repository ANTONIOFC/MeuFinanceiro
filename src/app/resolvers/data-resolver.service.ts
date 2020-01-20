import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AcaoService } from '../services/acao.service';
import { Acao } from '../models/acao';
 
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<Acao> {

  constructor(private acaoService: AcaoService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.acaoService.obter(+id);
  }
}
