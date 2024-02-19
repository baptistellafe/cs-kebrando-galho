import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent  implements OnInit {

  public buscando: boolean = false;

  constructor() { }

  ngOnInit() {}

  public efetuarBusca(): void {
    this.buscando = true;
  }

}
