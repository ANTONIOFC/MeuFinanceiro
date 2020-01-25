import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcaoResolver } from './resolvers/acao-resolver';
import { AcaoUsuarioResolver } from './resolvers/acao-usuario-resolver';
import { OrdemResolver } from './resolvers/ordem-resolver';
import { OrdensResolver } from './resolvers/ordens-resolver';
import { AcoesUsuarioResolver } from './resolvers/acoes-usuario-resolver';

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
      acao: AcaoResolver,
      acaoUsuario: AcaoUsuarioResolver,
      ordens: OrdensResolver
    },
    loadChildren: () => import('./pages/acao-detail/acao-detail.module').then( m => m.AcaoDetailPageModule)
  },
  {
    path: 'ordem/:id',
    loadChildren: () => import('./pages/ordem/ordem.module').then( m => m.OrdemPageModule)
  },
  {
    path: 'ordem/:id/:operacao',
    resolve: {
      acao: AcaoResolver,
      ordem: OrdemResolver,
      acaoUsuario: AcaoUsuarioResolver
    },
    loadChildren: () => import('./pages/ordem/ordem.module').then( m => m.OrdemPageModule)
  },
  {
    path: 'minhas-acoes',
    resolve: {
      acoes: AcoesUsuarioResolver
    },
    loadChildren: () => import('./pages/minhas-acoes/minhas-acoes.module').then( m => m.MinhasAcoesPageModule)
  },
  {
    path: 'minhas-ordens',
    resolve: {
      ordens: OrdensResolver
    },
    loadChildren: () => import('./pages/minhas-ordens/minhas-ordens.module').then( m => m.MinhasOrdensPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
