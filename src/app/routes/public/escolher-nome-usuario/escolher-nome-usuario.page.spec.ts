import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolherNomeUsuarioPage } from './escolher-nome-usuario.page';

describe('EscolherNomeUsuarioPage', () => {
  let component: EscolherNomeUsuarioPage;
  let fixture: ComponentFixture<EscolherNomeUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscolherNomeUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
