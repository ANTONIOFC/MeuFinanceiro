import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcaoDetailPage } from './acao-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AcaoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcaoDetailPageRoutingModule {}
