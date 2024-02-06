import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  public formularioDeCadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title : Title
  ) { }

  ngOnInit() {
    this.criarFormDeCadastro();
  }

  ionViewWillEnter() {
    this.title.setTitle('Criação de conta - Kebrando Galho');
  }

  public criarFormDeCadastro(): void {
    this.formularioDeCadastro = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      senha: [ null, [ Validators.required ] ]
    })
  }

}
