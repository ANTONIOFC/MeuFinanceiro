import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acao } from 'src/app/models/acao';
import { AcaoUsuario } from 'src/app/models/acoes-usuario';
import { Ordem } from 'src/app/models/ordem';

@Component({
  selector: 'app-acao-detail',
  templateUrl: './acao-detail.page.html',
  styleUrls: ['./acao-detail.page.scss'],
})
export class AcaoDetailPage implements OnInit {

  acao: Acao;
  acaoUsuario: AcaoUsuario;
  ordens: Ordem[];
  data: Date;

  constructor(private route: ActivatedRoute, private router: Router) {

    setInterval(() => {
      this.data = new Date()
    }, 1000)
   }

  ngOnInit() {
    if(this.route.snapshot.data['acao']) {
      this.acao = this.route.snapshot.data['acao'];
      console.log(this.acao);
    }

    if (this.route.snapshot.data['acaoUsuario']) {
      this.acaoUsuario = this.route.snapshot.data['acaoUsuario'];
      console.log(this.acaoUsuario);
    }

    if (this.route.snapshot.data['ordens']) {
      this.ordens = this.route.snapshot.data['ordens'];
      console.log(this.ordens);
    }
  }

/*   efetuarOperacao(operacao) {
    this.router.navigate(['/ordem'], { queryParams: { 'acaoId: this.acao.id', 'operacao': operacao } }, { queryParamsHandling: 'preserve' })
  } */
}
