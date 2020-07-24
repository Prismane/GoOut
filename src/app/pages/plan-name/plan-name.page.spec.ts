import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanNamePage } from './plan-name.page';

describe('PlanNamePage', () => {
  let component: PlanNamePage;
  let fixture: ComponentFixture<PlanNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
