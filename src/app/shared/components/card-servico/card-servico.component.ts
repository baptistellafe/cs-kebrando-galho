import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss'],
})
export class CardServicoComponent  implements OnInit {

  public avaliacao: string;

  constructor() { }

  ngOnInit() {}

}
