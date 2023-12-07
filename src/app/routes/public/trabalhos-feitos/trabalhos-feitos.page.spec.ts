import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrabalhosFeitosPage } from './trabalhos-feitos.page';

describe('TrabalhosFeitosPage', () => {
  let component: TrabalhosFeitosPage;
  let fixture: ComponentFixture<TrabalhosFeitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrabalhosFeitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
