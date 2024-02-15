import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaCriadaPage } from './conta-criada.page';

describe('ContaCriadaPage', () => {
  let component: ContaCriadaPage;
  let fixture: ComponentFixture<ContaCriadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContaCriadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
