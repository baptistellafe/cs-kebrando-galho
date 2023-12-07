import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessarContaPageRoutingModule } from './acessar-conta-routing.module';

import { AcessarContaPage } from './acessar-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessarContaPageRoutingModule
  ],
  declarations: [AcessarContaPage]
})
export class AcessarContaPageModule {}
