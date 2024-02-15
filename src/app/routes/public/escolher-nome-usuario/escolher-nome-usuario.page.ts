import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-escolher-nome-usuario',
  templateUrl: './escolher-nome-usuario.page.html',
  styleUrls: ['./escolher-nome-usuario.page.scss'],
})
export class EscolherNomeUsuarioPage implements OnInit {

  public formularioUsuario : FormGroup;

  constructor(
    private fb: FormBuilder,
    private title : Title
  ) { }

  ngOnInit() {
    this.criarFormUsuario();
  }
  
  ionViewWillEnter() {
    this.title.setTitle('Criação do nome de usuário - Kebrando Galho');
  }

  public criarFormUsuario(): void {
    this.formularioUsuario = this.fb.group({
      nomeDeUsuario: [ null, [ Validators.required ] ]
    })
  }

}
