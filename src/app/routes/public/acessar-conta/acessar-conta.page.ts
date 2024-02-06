import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-acessar-conta',
  templateUrl: './acessar-conta.page.html',
  styleUrls: ['./acessar-conta.page.scss'],
})
export class AcessarContaPage implements OnInit {

  public formDeLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title : Title
  ) { }

  ngOnInit() {
    this.criarFormDeLogin();
  }

  ionViewWillEnter() {
    this.title.setTitle('Acesse sua conta - Kebrando Galho');
  }

  public criarFormDeLogin(): void {
    this.formDeLogin = this.fb.group({
      emailLogin: [ null, [ Validators.required, Validators.email ] ],
      senhaLogin: [ null, [ Validators.required ] ],
      confirmarSenhaLogin: [ null, [ Validators.required ] ]
    })
  }

}
