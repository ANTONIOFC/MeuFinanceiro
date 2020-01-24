import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Acao } from '../models/acao';
import { catchError, retry } from 'rxjs/operators';
import { AcaoUsuario } from '../models/acoes-usuario';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  base_path = 'http://localhost:3000/';
  apiAcoes = "acoes";
  apiAcoesUsuario = "acoes-usuario";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

constructor(private http: HttpClient) { }

 listar(): Observable<Acao[]> {

    return this.http
      .get<Acao[]>(this.base_path + this.apiAcoes)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  obter(id: number): Observable<Acao> {

    return  this.http
      .get<Acao>(this.base_path + this.apiAcoes + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  obterAcaoUsuario(acaoId: number): Observable<AcaoUsuario> {

    return this.http
      .get<AcaoUsuario>(this.base_path + this.apiAcoesUsuario + '/' + acaoId)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  listarAcoesUsuario(): Observable<AcaoUsuario[]> {

    return this.http
      .get<AcaoUsuario[]>(this.base_path + this.apiAcoesUsuario)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
    
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('Ocorreu um erro:', error.error.message);
      } else {
        console.error(
          `Código do erro: ${error.status}, ` +
          `mensagem de erro: ${error.error}`);
      }
      return throwError(
        'Aconteceu um erro, por favor tente mais tarde.');
    };
  
}
