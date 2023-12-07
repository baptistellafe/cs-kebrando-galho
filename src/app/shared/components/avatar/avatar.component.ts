import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'kg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent  implements OnInit {

  @Input() corDaBorda: string;
  @Input() usuarioLogado: boolean;
  @Input() arrobaDoUsuario: string;
  @Input() urlDaFoto: string;

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}

  /**
   * @description Abre e fecha o menu.
   * @param menuId ID do menu.
   * @author Felipe Baptistella.
   */
  public toggleMenu(menuId: string): void {
    this.menuCtrl.toggle(menuId);
  }

}
