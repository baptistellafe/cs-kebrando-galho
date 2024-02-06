import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  public formularioRecuperacao : FormGroup;

  constructor(
    private fb: FormBuilder,
    private title : Title
  ) { }

  ngOnInit() {
    this.criarFormDeRecuperacaoDeSenha();
  }
  
  ionViewWillEnter() {
    this.title.setTitle('Recuperação de senha - Kebrando Galho');
  }

  public criarFormDeRecuperacaoDeSenha(): void {
    this.formularioRecuperacao = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ]
    })
  }

}
