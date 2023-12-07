import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejaUmPrestadorPageRoutingModule } from './seja-um-prestador-routing.module';

import { SejaUmPrestadorPage } from './seja-um-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejaUmPrestadorPageRoutingModule
  ],
  declarations: [SejaUmPrestadorPage]
})
export class SejaUmPrestadorPageModule {}
