import { Component, OnInit } from '@angular/core';
import { CardTrabalho } from 'src/app/interfaces/CardTrabalho';

@Component({
  selector: 'kg-trabalhos-feitos',
  templateUrl: './trabalhos-feitos.page.html',
  styleUrls: ['./trabalhos-feitos.page.scss'],
})
export class TrabalhosFeitosPage implements OnInit {

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

}
