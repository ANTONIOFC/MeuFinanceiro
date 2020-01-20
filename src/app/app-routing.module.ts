import { OrdemResolver } from './resolvers/ordem-resolver';
import { AcaoUsuarioResolver } from './resolvers/acao-usuario-resolver';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolvers/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'acoes',
    loadChildren: () => import('./pages/acao-list/acao-list.module').then( m => m.AcaoListPageModule)
  },
  {
    path: 'acoes/:id',
    resolve: {
      acao: DataResolverService,
      acaoUsuario: AcaoUsuarioResolver,
      ordens: OrdemResolver
    },
    loadChildren: () => import('./pages/acao-detail/acao-detail.module').then( m => m.AcaoDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
