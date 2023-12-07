import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenhaFazerParteComponent } from './venha-fazer-parte.component';

describe('VenhaFazerParteComponent', () => {
  let component: VenhaFazerParteComponent;
  let fixture: ComponentFixture<VenhaFazerParteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VenhaFazerParteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenhaFazerParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
