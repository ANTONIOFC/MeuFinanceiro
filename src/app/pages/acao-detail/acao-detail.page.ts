import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acao } from 'src/app/models/acao';

@Component({
  selector: 'app-acao-detail',
  templateUrl: './acao-detail.page.html',
  styleUrls: ['./acao-detail.page.scss'],
})
export class AcaoDetailPage implements OnInit {

  acao: Acao;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(this.route.snapshot.data['acao']) {
      this.acao = this.route.snapshot.data['acao'];
      console.log(this.acao);
    }
  }

}
