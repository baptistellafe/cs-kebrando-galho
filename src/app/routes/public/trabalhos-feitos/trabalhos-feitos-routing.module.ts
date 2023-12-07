import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhosFeitosPage } from './trabalhos-feitos.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosFeitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalhosFeitosPageRoutingModule {}
