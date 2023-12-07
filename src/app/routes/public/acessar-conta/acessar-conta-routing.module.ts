import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessarContaPage } from './acessar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: AcessarContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessarContaPageRoutingModule {}
