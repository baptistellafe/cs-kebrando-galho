import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardServicoPopular } from 'src/app/interfaces/CardServicoPopular';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'kg-servicos-populares',
  templateUrl: './servicos-populares.component.html',
  styleUrls: ['./servicos-populares.component.scss'],
})
export class ServicosPopularesComponent  implements OnInit {

  public servicosPopulares: CardServicoPopular[] = [
    {
      servico: 'pinturas-em-geral'
    },
    {
      servico: 'assistencia-tecnica'
    },
    {
      servico: 'mecanica'
    },
    {
      servico: 'obras-e-reparos'
    }
  ]

  @ViewChild('heroSwiper') servicosPopularesSwiperReference: ElementRef | undefined;
  public swiper?: Swiper;

  constructor() { }

  ngOnInit() {}

  /**
   * @description Inicializar o #heroSwiper.
   */
  public inicializarServicosPopularesSwiper(): void {
    this.swiper = this.servicosPopularesSwiperReference?.nativeElement.swiper;
  }

}
