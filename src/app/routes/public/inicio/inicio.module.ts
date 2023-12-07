import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { SharedModule } from 'src/app/shared/shared.module';
import Swiper from 'swiper';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    SharedModule
  ],
  declarations: [InicioPage],
  exports: [
    InicioPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InicioPageModule {}
