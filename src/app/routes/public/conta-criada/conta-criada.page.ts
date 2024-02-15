import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kg-conta-criada',
  templateUrl: './conta-criada.page.html',
  styleUrls: ['./conta-criada.page.scss'],
})
export class ContaCriadaPage implements OnInit {

  public tipoDeUsuario: string;

  constructor() { }

  ngOnInit() {
  }

  public definirTipoDeUsuario(tipoDeUsuario: string): void {
    this.tipoDeUsuario = tipoDeUsuario;
  }

}
