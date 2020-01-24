import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasAcoesPageRoutingModule } from './minhas-acoes-routing.module';

import { MinhasAcoesPage } from './minhas-acoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasAcoesPageRoutingModule
  ],
  declarations: [MinhasAcoesPage]
})
export class MinhasAcoesPageModule {}
