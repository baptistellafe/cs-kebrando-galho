import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-qual-a-melhor-parte',
  templateUrl: './qual-a-melhor-parte.component.html',
  styleUrls: ['./qual-a-melhor-parte.component.scss'],
})
export class QualAMelhorParteComponent  implements OnInit {

  public items: any[] = [
    {
      icon: 'checkmark-circle-outline',
      title: 'Atenha-se ao seu orçamento',
      texts: ['Encontre o serviço ideal para cada faixa de preço.', 'Sem tarifas por hora; preços somente com base em projetos.']
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Orçamentos prévios',
      texts: ['Você não terá surpresas. Os pagamentos só são liberados após sua aprovação.']
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Conte com suporte 24/7',
      texts: ['Nossa equipe de suporte 24 horas est[a disponível para ajudar a qualquer hora e em qualquer lugar.']
    }
  ]

  constructor() { }

  ngOnInit() {}

}
