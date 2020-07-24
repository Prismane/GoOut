import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPlansPage } from './all-plans.page';

describe('AllPlansPage', () => {
  let component: AllPlansPage;
  let fixture: ComponentFixture<AllPlansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
