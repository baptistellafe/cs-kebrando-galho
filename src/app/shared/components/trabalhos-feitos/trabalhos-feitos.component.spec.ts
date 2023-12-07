import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrabalhosFeitosComponent } from './trabalhos-feitos.component';

describe('TrabalhosFeitosComponent', () => {
  let component: TrabalhosFeitosComponent;
  let fixture: ComponentFixture<TrabalhosFeitosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosFeitosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabalhosFeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
