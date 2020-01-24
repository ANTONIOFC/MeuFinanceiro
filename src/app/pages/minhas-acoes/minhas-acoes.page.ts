import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AcaoUsuario } from './../../models/acoes-usuario';

@Component({
  selector: 'app-minhas-acoes',
  templateUrl: './minhas-acoes.page.html',
  styleUrls: ['./minhas-acoes.page.scss'],
})
export class MinhasAcoesPage implements OnInit {

  acoes: AcaoUsuario[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if(this.route.snapshot.data['acoes']) {
      this.acoes = this.route.snapshot.data['acoes'];
    }
  }
}
