import { Component, OnInit } from '@angular/core';
import { CardServicoPopular } from 'src/app/interfaces/CardServicoPopular';

@Component({
  selector: 'kg-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
