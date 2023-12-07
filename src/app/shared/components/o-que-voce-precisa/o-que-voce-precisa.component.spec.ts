import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OQueVocePrecisaComponent } from './o-que-voce-precisa.component';

describe('OQueVocePrecisaComponent', () => {
  let component: OQueVocePrecisaComponent;
  let fixture: ComponentFixture<OQueVocePrecisaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OQueVocePrecisaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OQueVocePrecisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
