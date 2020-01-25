import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasOrdensPageRoutingModule } from './minhas-ordens-routing.module';

import { MinhasOrdensPage } from './minhas-ordens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasOrdensPageRoutingModule
  ],
  declarations: [MinhasOrdensPage]
})
export class MinhasOrdensPageModule {}
