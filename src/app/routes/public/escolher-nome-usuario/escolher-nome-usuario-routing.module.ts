import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherNomeUsuarioPage } from './escolher-nome-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherNomeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherNomeUsuarioPageRoutingModule {}
