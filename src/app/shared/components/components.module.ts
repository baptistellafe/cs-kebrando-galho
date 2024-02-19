import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { HeroComponent } from './hero/hero.component';
import { ServicosPopularesComponent } from './servicos-populares/servicos-populares.component';
import { QualAMelhorParteComponent } from './qual-a-melhor-parte/qual-a-melhor-parte.component';
import { OQueVocePrecisaComponent } from './o-que-voce-precisa/o-que-voce-precisa.component';
import { VenhaFazerParteComponent } from './venha-fazer-parte/venha-fazer-parte.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { TrabalhosFeitosComponent } from './trabalhos-feitos/trabalhos-feitos.component';
import { CadastrarServicosComponent } from './cadastrar-servicos/cadastrar-servicos.component';
import { FooterComponent } from './footer/footer.component';
import { CardPopularComponent } from 'src/app/shared/components/card-popular/card-popular.component';
import { CardTrabalhoComponent } from './card-trabalho/card-trabalho.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CardServicoComponent } from './card-servico/card-servico.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    AvatarComponent,
    HeroComponent,
    ServicosPopularesComponent,
    QualAMelhorParteComponent,
    OQueVocePrecisaComponent,
    VenhaFazerParteComponent,
    DepoimentosComponent,
    TrabalhosFeitosComponent,
    CadastrarServicosComponent,
    FooterComponent,
    CardPopularComponent,
    CardTrabalhoComponent,
    BuscarComponent,
    CardServicoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
    AvatarComponent,
    HeroComponent,
    ServicosPopularesComponent,
    QualAMelhorParteComponent,
    OQueVocePrecisaComponent,
    VenhaFazerParteComponent,
    DepoimentosComponent,
    TrabalhosFeitosComponent,
    CadastrarServicosComponent,
    FooterComponent,
    CardPopularComponent,
    CardTrabalhoComponent,
    BuscarComponent,
    CardServicoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
