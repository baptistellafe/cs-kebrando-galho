import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-o-que-voce-precisa',
  templateUrl: './o-que-voce-precisa.component.html',
  styleUrls: ['./o-que-voce-precisa.component.scss'],
})
export class OQueVocePrecisaComponent  implements OnInit {

  public necessidades: any = [
    {
      tipo: 'consultoria'
    },
    {
      tipo: 'marcenaria'
    },
    {
      tipo: 'jardinagem'
    },
    {
      tipo: 'assistencia-tecnica'
    },
    {
      tipo: 'fotografia'
    },
    {
      tipo: 'informatica'
    },
    {
      tipo: 'designer'
    },
    {
      tipo: 'mecanica'
    },
    {
      tipo: 'pintura'
    },
    {
      tipo: 'publicidade'
    },
    {
      tipo: 'auto-pecas'
    },
    {
      tipo: 'reparos-residenciais'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
