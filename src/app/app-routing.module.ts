import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./routes/public/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./routes/private/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'acessar-conta',
    loadChildren: () => import('./routes/public/acessar-conta/acessar-conta.module').then( m => m.AcessarContaPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./routes/public/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./routes/public/servicos/servicos.module').then( m => m.ServicosPageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./routes/public/beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'seja-um-prestador',
    loadChildren: () => import('./routes/public/seja-um-prestador/seja-um-prestador.module').then( m => m.SejaUmPrestadorPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./routes/private/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'mensagens',
    loadChildren: () => import('./routes/private/mensagens/mensagens.module').then( m => m.MensagensPageModule)
  },
  {
    path: 'trabalhos-feitos',
    loadChildren: () => import('./routes/public/trabalhos-feitos/trabalhos-feitos.module').then( m => m.TrabalhosFeitosPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./routes/public/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'escolher-nome-usuario',
    loadChildren: () => import('./routes/public/escolher-nome-usuario/escolher-nome-usuario.module').then( m => m.EscolherNomeUsuarioPageModule)
  },
  {
    path: 'conta-criada',
    loadChildren: () => import('./routes/public/conta-criada/conta-criada.module').then( m => m.ContaCriadaPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./routes/public/explorar/explorar.module').then( m => m.ExplorarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
