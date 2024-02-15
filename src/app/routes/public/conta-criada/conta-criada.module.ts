import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaCriadaPageRoutingModule } from './conta-criada-routing.module';

import { ContaCriadaPage } from './conta-criada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaCriadaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContaCriadaPage]
})
export class ContaCriadaPageModule {}
