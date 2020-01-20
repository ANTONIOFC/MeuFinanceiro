import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Acao } from 'src/app/models/acao';
import { take } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-acao-list',
  templateUrl: './acao-list.page.html',
  styleUrls: ['./acao-list.page.scss'],
})
export class AcaoListPage implements OnInit {

  acoes: Acao[];

  constructor(
    public apiService: ApiService,
    private router: Router) {
    this.acoes = [];
   }

  ngOnInit() {
    this.getAllAcoes();
  }

  getAllAcoes() {

    this.apiService.getList()
      .pipe(take(1))  
      .subscribe(response => {
        console.log(response);
        this.acoes = response;
      })
  }

  onSelectAcao(acao: Acao){
   // console.log(acao);

    this.router.navigateByUrl('/acoes/' + acao.id);
  }

}
