import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanDatePage } from './plan-date.page';

describe('PlanDatePage', () => {
  let component: PlanDatePage;
  let fixture: ComponentFixture<PlanDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
