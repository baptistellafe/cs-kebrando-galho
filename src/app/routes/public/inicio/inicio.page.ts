import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'kg-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild('conteudo') conteudo: IonContent;

  constructor(private title: Title) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.deslizarPaginaParaOtopo(400);
    this.title.setTitle('Início - Kebrando Galho');
  }

  /**
   * @description Responsável por deslizar a tela para o topo.
   * @param duration opcional do tipo número ou indefinido - receberá um valor que representará a duração da animação do scroll.
   */
  public deslizarPaginaParaOtopo(duration?: number | undefined): void {
    this.conteudo.scrollToTop(duration)
  }

}
