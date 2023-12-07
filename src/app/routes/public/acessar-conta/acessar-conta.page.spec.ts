import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcessarContaPage } from './acessar-conta.page';

describe('AcessarContaPage', () => {
  let component: AcessarContaPage;
  let fixture: ComponentFixture<AcessarContaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcessarContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
