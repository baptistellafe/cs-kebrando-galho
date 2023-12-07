import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.title.setTitle('Notificações - Kebrando Galho');
  }

}
