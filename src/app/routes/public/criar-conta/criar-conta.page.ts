import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kg-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  public formularioDeCadastro: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  public criarFormDeCadastro(): void {
    this.formularioDeCadastro = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      senha: [ null, [ Validators.required ] ],
      confirmarSenha: [ null, [ Validators.required, Validators.email ] ]
    })
  }

}
