import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'kg-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public usuarioLogado: boolean = false; // ATIVIDADE DO USUÁRIO NO APP - LOGADO OU DESLOGADO.
  public arrobaDoUsuario: string = 'phelps';
  public urlDaFoto: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  constructor(public menuCtrl : MenuController) {}

  ngOnInit() {
    this.verificarSeEstaLogado();
  }

  /**
   * @description Habilita e desabilita o menu atravé2s do menuId.
   * @param menuId ID do menu.
   * @author Felipe Baptistella.
   */
  public habilitarMenu(habilitarMenu: boolean, menuId?: string): void {
    this.menuCtrl.enable(habilitarMenu, menuId);
  }

   /**
   * @description Bloqueia o menu do perfil caso o usuário esteja deslogado, fazendo com que ele não consiga ter acesso nem através do swiper da tela.
   * @param menuId ID do menu.
   * @author Felipe Baptistella.
   */
   public verificarSeEstaLogado(): void {
    this.usuarioLogado ? this.menuCtrl.enable(true, 'perfil') : this.menuCtrl.enable(false, 'perfil');
  }
}
