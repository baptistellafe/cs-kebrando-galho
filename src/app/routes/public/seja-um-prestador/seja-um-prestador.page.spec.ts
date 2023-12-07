import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SejaUmPrestadorPage } from './seja-um-prestador.page';

describe('SejaUmPrestadorPage', () => {
  let component: SejaUmPrestadorPage;
  let fixture: ComponentFixture<SejaUmPrestadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SejaUmPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
