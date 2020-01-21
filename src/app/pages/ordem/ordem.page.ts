import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit, OnDestroy {

  formulario: FormGroup;

  sub: Subscription;
  operacao: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.sub = 
      this.route.queryParams
      .subscribe(params => {
        this.operacao = params['operacao'] || ''
      });

    this.formulario = this.formBuilder.group({
      operacao: [this.operacao, Validators.required],
      qtd: [null, Validators.required],
      valor: [null, Validators.required],
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  limpar() {

    this.formulario.reset();
  }

  onSubmit() {

  }
}
