import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcaoListPage } from './acao-list.page';

const routes: Routes = [
  {
    path: '',
    component: AcaoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcaoListPageRoutingModule {}
