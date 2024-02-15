import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaCriadaPage } from './conta-criada.page';

const routes: Routes = [
  {
    path: '',
    component: ContaCriadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaCriadaPageRoutingModule {}
