import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Ordem } from '../models/ordem';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  base_path = 'http://localhost:3000/ordens';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  listar(): Observable<Ordem[]> {

    return this.http
      .get<Ordem[]>(this.base_path + '?_expand=acao')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  obter(id: number): Observable<Ordem> {

    return  this.http
      .get<Ordem>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  incluir(ordem: Ordem): Observable<Ordem> {
    return this.http
      .post<Ordem>(this.base_path, JSON.stringify(ordem), this.httpOptions)
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
