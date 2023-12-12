import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kg-acessar-conta',
  templateUrl: './acessar-conta.page.html',
  styleUrls: ['./acessar-conta.page.scss'],
})
export class AcessarContaPage implements OnInit {

  public formDeLogin: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.criarFormDeLogin();
  }

  public criarFormDeLogin(): void {
    this.formDeLogin = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      senha: [ null, [ Validators.required ] ],
      confirmarSenha: [ null, [ Validators.required ] ]
    })
  }

}
