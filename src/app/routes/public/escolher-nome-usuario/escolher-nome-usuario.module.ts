import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherNomeUsuarioPageRoutingModule } from './escolher-nome-usuario-routing.module';

import { EscolherNomeUsuarioPage } from './escolher-nome-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherNomeUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EscolherNomeUsuarioPage]
})
export class EscolherNomeUsuarioPageModule {}
