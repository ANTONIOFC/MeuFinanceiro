import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';

@Component({
  selector: 'app-minhas-ordens',
  templateUrl: './minhas-ordens.page.html',
  styleUrls: ['./minhas-ordens.page.scss'],
})
export class MinhasOrdensPage implements OnInit {

  ordens: Ordem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    if(this.route.snapshot.data['ordens']) {
      this.ordens = this.route.snapshot.data['ordens'];
    }
  }

}
