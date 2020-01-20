import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcaoListPageRoutingModule } from './acao-list-routing.module';

import { AcaoListPage } from './acao-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcaoListPageRoutingModule
  ],
  declarations: [AcaoListPage]
})
export class AcaoListPageModule {}
