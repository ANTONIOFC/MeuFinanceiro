import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdemService } from 'src/app/services/ordem.service';
import { Ordem } from 'src/app/models/ordem';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit, OnDestroy {

  formulario: FormGroup;
  ordem: Ordem;

  sub: Subscription;
  //operacao: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ordemService: OrdemService) { }

  ngOnInit() {

/*     this.sub = 
      this.route.queryParams
      .subscribe(params => {
        this.operacao = params['operacao'] || ''
      }); */

    this.ordem = this.route.snapshot.data['ordem'];

    this.formulario = this.formBuilder.group({
      operacao: [this.ordem.operacao, Validators.required],
      qtd: [this.ordem.qtd, Validators.required],
      valor: [this.ordem.valor, Validators.required],
    })
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  limpar() {

    this.formulario.reset();
  }

  onSubmit() {

    if (this.formulario.valid) {

      this.ordem.qtd = this.formulario.get('qtd').value;
      this.ordem.valor = this.formulario.get('valor').value;
      this.ordem.situacao = 'fechada';

      this.ordemService.incluir(this.ordem)
        .subscribe(ret => {
            console.log('ordem gravada');
        });
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsDirty();
      });
    }

  }
}
