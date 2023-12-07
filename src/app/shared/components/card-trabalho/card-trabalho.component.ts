import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kg-card-trabalho',
  templateUrl: './card-trabalho.component.html',
  styleUrls: ['./card-trabalho.component.scss'],
})
export class CardTrabalhoComponent  implements OnInit {
  
  @Input() imagem: string;
  @Input() titulo: string;
  @Input() nomeDoProfissional: string;
  @Input() tipoDeTrabalho: string;
  @Input() favorito: boolean;
  @Input() urlDaFotoDePerfil?: string | null;

  constructor() { }

  ngOnInit() {}

  /**
   * @description Responsável por favoritar ou desfavoritar um trabalho.
   * @param event obrigatório do tipo any que receberá um evento.
   * @author Felipe Baptistella.
   */
  public favoritarTrabalho(event: any): void {
    this.favorito = !this.favorito
  }

}
