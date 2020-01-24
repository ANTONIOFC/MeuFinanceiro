import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdemService } from 'src/app/services/ordem.service';
import { Ordem } from 'src/app/models/ordem';
import { ToastController } from '@ionic/angular';
import { AcaoUsuario } from 'src/app/models/acoes-usuario';
import { CustomValidation } from 'src/app/validators/custom-validation';
import { Acao } from 'src/app/models/acao';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit, OnDestroy {

  toast;
  formulario: FormGroup;
  acao: Acao;
  ordem: Ordem;
  acaoUsuario: AcaoUsuario;

  sub: Subscription;
  //operacao: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private ordemService: OrdemService,
    private toastCtrl: ToastController) { }

  ngOnInit() {

/*     this.sub = 
      this.route.queryParams
      .subscribe(params => {
        this.operacao = params['operacao'] || ''
      }); */

    this.ordem = this.route.snapshot.data['ordem'];
    this.acao = this.route.snapshot.data['acao'];

    if (this.route.snapshot.data['acaoUsuario']) {
      this.acaoUsuario = this.route.snapshot.data['acaoUsuario'];
    }

    this.formulario = this.formBuilder.group({
      //operacao: [this.ordem.operacao, Validators.required],
      qtd: [this.ordem.qtd, Validators.compose([Validators.required, CustomValidation.quantidadeVendaValidator(this.acaoUsuario.qtd) ])],
      valor: [this.ordem.valor, Validators.required],
    })
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  limpar() {

    this.hideToast();
    this.formulario.reset();
  }

  onSubmit() {

    if (this.formulario.valid) {

      this.ordem.qtd = this.formulario.get('qtd').value;
      this.ordem.valor = this.formulario.get('valor').value;
      this.ordem.situacao = 'fechada';

      this.ordemService.incluir(this.ordem)
        .subscribe(ret => {
          this.presentToast(`${this.ordem.operacao} efetuada com sucesso`);
          this.router.navigateByUrl('acoes');
        });
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsDirty();
      });
    }
  }

  verificaValidTouched(campo: string) {

    return !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  async presentToast(mensagem: string) {
    this.toast = await this.toastCtrl.create({
      message: mensagem,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'fechar',
      color: 'danger'
    });
    
    this.toast.present();
  }

  hideToast() {

    if (this.toast)
      this.toast.dismiss();
  }

}
