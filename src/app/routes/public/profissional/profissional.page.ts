import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'kg-profissional',
  templateUrl: './profissional.page.html',
  styleUrls: ['./profissional.page.scss'],
})
export class ProfissionalPage implements OnInit {
  public slideSelecionado: number = 0;

  @ViewChild('profissionalSwiper') profissionalSwiperReference: ElementRef | undefined;
  public swiper?: Swiper;

  @ViewChild('profissionalSwiperThumbs') profissionalSwiperThumbsReference: ElementRef | undefined;
  public swiperThumbs?: Swiper;

  public informacoesDoUser: any = {
    nome: 'Felipe Baptistella Vieira',
    profissao: 'Pintor',
    username: 'baptistellafe',
    avaliacao: '4.8',
    avaliacoesRecebidas: 253,
    valorInicial: 'R$25',
    servicoCobrado: 'm2',
    urlDaFoto: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    galeria: [
      {
        url: './../../../../assets/images/slider/olhos.png'
      },
      {
        url: './../../../../assets/images/slider/olhos.png'
      },
      {
        url: './../../../../assets/images/slider/olhos.png'
      },
      {
        url: './../../../../assets/images/slider/olhos.png'
      },
      {
        url: './../../../../assets/images/slider/olhos.png'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * @description Inicializar o #profissionalSwiper.
   */
  public inicializarSwipers(): void {
    this.swiper = this.profissionalSwiperReference?.nativeElement.swiper;
    this.swiperThumbs = this.profissionalSwiperThumbsReference?.nativeElement.swiper;
  }

  public slideSwiper(i: number): void {
    this.profissionalSwiperReference?.nativeElement.swiper.slideTo(i)
  }

  public definirSlideAtivo(i: number): void {
    this.slideSelecionado = i;
  }

}
