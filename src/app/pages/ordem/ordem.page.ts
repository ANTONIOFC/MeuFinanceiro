import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit, OnDestroy {

  sub: Subscription;
  operacao: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = 
      this.route.queryParams
      .subscribe(params => {
        this.operacao = params['operacao'] || ''
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
