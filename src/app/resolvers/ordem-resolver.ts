import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ordem } from '../models/ordem';
import { OrdemService } from '../services/ordem.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class OrdemResolver implements Resolve<Ordem[]> {

    constructor(private ordemService: OrdemService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Ordem[]> {

        return this.ordemService.listar();
    }

}
