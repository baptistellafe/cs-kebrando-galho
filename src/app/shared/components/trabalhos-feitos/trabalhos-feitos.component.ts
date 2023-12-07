import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardTrabalho } from 'src/app/interfaces/CardTrabalho';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'kg-trabalhos-feitos',
  templateUrl: './trabalhos-feitos.component.html',
  styleUrls: ['./trabalhos-feitos.component.scss'],
})
export class TrabalhosFeitosComponent  implements OnInit {

  @ViewChild('trabalhosFeitosSwiper') trabalhosFeitosSwiperReference: ElementRef | undefined;
  public swiper?: Swiper;

  public cards: CardTrabalho[] = [
    {
      imagem: './../../../../assets/images/trabalhos/cozinha.png',
      tipoDeTrabalho: 'Cozinha planejada',
      nomeDoProfissional: 'Ticiane Fonseca',
      favorito: false,
      urlDaFotoDePerfil: null
    },
    {
      imagem: './../../../../assets/images/trabalhos/casamento.png',
      tipoDeTrabalho: 'Cozinha planejada',
      nomeDoProfissional: 'John Alves',
      favorito: false,
      urlDaFotoDePerfil: './../../../../assets/images/pessoas/john.png'
    },
    {
      imagem: './../../../../assets/images/trabalhos/portifolio.png',
      tipoDeTrabalho: 'Portifólio',
      nomeDoProfissional: 'Ticiane Fonseca',
      favorito: false,
      urlDaFotoDePerfil: './../../../../assets/images/pessoas/ticiane.png'
    },
    {
      imagem: './../../../../assets/images/trabalhos/funilaria.png',
      tipoDeTrabalho: 'Funilaria',
      nomeDoProfissional: 'Pedro Henrique Souza',
      favorito: false,
      urlDaFotoDePerfil: null
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

  /**
   * @description Inicializar o #heroSwiper.
   */
  public inicializarServicosPopularesSwiper(): void {
    this.swiper = this.trabalhosFeitosSwiperReference?.nativeElement.swiper;
  }

}
