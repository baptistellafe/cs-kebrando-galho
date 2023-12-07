import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejaUmPrestadorPage } from './seja-um-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: SejaUmPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejaUmPrestadorPageRoutingModule {}
