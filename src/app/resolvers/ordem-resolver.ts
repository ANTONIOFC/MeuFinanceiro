import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ordem } from '../models/ordem';
import { OrdemService } from '../services/ordem.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class OrdemResolver implements Resolve<Ordem> {

    constructor(
        private ordemService: OrdemService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Ordem> {

        if (route.params && route.params['id']) {

            let id = route.paramMap.get('id');

            if (route.params['operacao']) {
                let operacao = route.paramMap.get('operacao');
            
                return of ({
                    id: null,
                    acaoId: +id,
                    qtd: null,
                    valor: null,
                    operacao: operacao,
                    situacao: 'aberta'
                })    
            }
            else {
                return this.ordemService.obter(+id);
            }
        }
    }

}
