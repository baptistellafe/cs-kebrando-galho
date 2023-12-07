import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'kg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent  implements OnInit {

  @ViewChild('heroSwiper') heroSwiperReference: ElementRef | undefined;
  public swiper?: Swiper;

  public maisBuscados: any = [
    {
      label: 'Pintura residencial'
    },
    {
      label: 'Funilaria'
    },
    {
      label: 'Troca de tela do celular'
    }
  ]

  constructor() { }

  ngOnInit() {}

  /**
   * @description Inicializar o #heroSwiper.
   */
  public inicializarHeroSwiper(): void {
    this.swiper = this.heroSwiperReference?.nativeElement.swiper;
  }

}
