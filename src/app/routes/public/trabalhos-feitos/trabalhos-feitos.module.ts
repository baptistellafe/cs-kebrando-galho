import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalhosFeitosPageRoutingModule } from './trabalhos-feitos-routing.module';

import { TrabalhosFeitosPage } from './trabalhos-feitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalhosFeitosPageRoutingModule
  ],
  declarations: [TrabalhosFeitosPage]
})
export class TrabalhosFeitosPageModule {}
