import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'kg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  public anoDeCriacaoDoKebrando: number | string = 2023; // ANO DE CRIAÇÃO.
  public anoAtual: number | string = moment().year(); // ANO ATUAL.
  public anoAtualIgualAoAnoDeCriacao: boolean = false; // RECEBE O BOLEANO SE O ANO ATUAL FOR IGUAL AO DE CRIAÇÃO.

  constructor() { }

  ngOnInit() {
    this.verificarAno();
  }

  /**
   * @description Verificar se o ano atual é igual ao ano de criação do KEBRANDO para aparecer copyright 2023 ou copyright 2023-2025, por exemplo.
   */
  public verificarAno(): void {
    this.anoAtualIgualAoAnoDeCriacao = this.anoAtual === this.anoDeCriacaoDoKebrando;
  }

}
