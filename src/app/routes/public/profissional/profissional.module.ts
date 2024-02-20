import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfissionalPageRoutingModule } from './profissional-routing.module';

import { ProfissionalPage } from './profissional.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfissionalPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfissionalPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfissionalPageModule {}
