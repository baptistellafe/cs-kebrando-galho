import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Depoimento } from 'src/app/interfaces/Depoimento';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'kg-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent  implements OnInit {

  public depoimentos: Depoimento[] = [
    {
      imagemDaPessoa: './../../../../assets/images/depoimentos/depoimento-0.png',
      nomeDaPessoa: 'Natalia Dias, Advogada',
      empresaDaPessoa: 'S & S Advocacia',
      depoimento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend fermentum neque ac semper. Cras dictum egestas.'
    },
    {
      imagemDaPessoa: './../../../../assets/images/depoimentos/depoimento-0.png',
      nomeDaPessoa: 'Felipe Baptistella, Front-end',
      empresaDaPessoa: 'Continuum Saturno',
      depoimento: 'A mãe do rick é muito boa, realmente.'
    }
  ]

  @ViewChild('heroSwiper') depoimentosSwiperReference: ElementRef | undefined;
  public swiper?: Swiper;

  constructor() { }

  ngOnInit() {}

  /**
   * @description Inicializar o #heroSwiper.
   */
  public inicializarDepoimentosSwiper(): void {
    this.swiper = this.depoimentosSwiperReference?.nativeElement.swiper;
  }

}
