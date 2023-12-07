import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { map } from 'rxjs';

@Component({
  selector: 'kg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() usuarioLogado: boolean; // ATIVIDADE DO USUÁRIO NO APP - LOGADO OU DESLOGADO.
  @Input() arrobaDoUsuario: string;
  @Input() urlDaFoto: string;
  @Input() iconeSelecionado: number | undefined | null;

  // OPÇÕES DO MENU DO HEADER (QUANDO DESLOGADO)
  public opcoesDoMenu: any[] = [
    {
      title: 'Seja um prestador',
      text: 'Seja um prestador',
      href: ['/seja-um-prestador']
    },
    {
      title: 'Benefícios',
      text: 'Benefícios',
      href: ['/beneficios']
    },
    {
      title: 'Serviços',
      text: 'Serviços',
      href: ['/servicos']
    }
  ]

  // ÍCONES DO HEADER (QUANDO LOGADO)
  public icones: any[] = [
    {
      icon: 'notifications',
      text: 'Notificações',
      href: ['/notificacoes']
    },
    {
      icon: 'mail',
      text: 'E-mail',
      href: ['/mensagens']
    },
    {
      icon: 'heart',
      text: 'Favoritos',
      href: ['/pedidos']
    }
  ]

  constructor(
    public alertCtrl : AlertController,
    public loadingCtrl : LoadingController,
    public navCtrl : NavController,
    public router : Router
  ) { }

  ngOnInit() {

  }

  /**
   * @description Responsável por disparar o Alert de confirmação para sair da conta.
   * @author Felipe Baptistella
   */
  public async mostrarAlertaSairDaConta(): Promise<HTMLIonAlertElement> {
    const loading = await this.mostrarLoading();

    const alert = await this.alertCtrl.create({
      cssClass: 'kg-alert',
      mode: 'ios',
      header: 'Sair da conta',
      message: 'Tem certeza que deseja sair do site?',
      backdropDismiss: false,
      buttons: [
        {
          cssClass: 'btn-black-clear',
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Quero sair',
          role: 'confirm',
          handler: () => {
            loading.present();

            // SIMULANDO UM LOGOUT
            setTimeout(() => {
              this.sairDaConta();
              loading.dismiss();
              this.irParaTelaInicio();
            }, 3000);
          }
        }
      ]
    })

    await alert.present();

    return alert;
  }

  /**
   * @description Responsável por disparar um loading na tela.
   * @author Felipe Baptistella
   */
  public async mostrarLoading(): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      mode: 'ios',
      spinner: 'dots'
    })

    return loading;
  }

  /**
   * @description Responsável efetuar o logout.
   * @author Felipe Baptistella
   */
  public sairDaConta(): void {
    console.log('Saindo da conta');
  }

  /**
   * @description Responsável por redirecionar o usuário para a tela início do site.
   * @author Felipe Baptistella
   */
  public irParaTelaInicio(): void {
    this.navCtrl.navigateBack('/inicio');
  }

}
