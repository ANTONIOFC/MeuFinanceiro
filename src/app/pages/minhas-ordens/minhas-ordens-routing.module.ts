import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasOrdensPage } from './minhas-ordens.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasOrdensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasOrdensPageRoutingModule {}
