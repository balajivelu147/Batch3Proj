import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveInvestmentComponent } from './passive-investment.component';

describe('PassiveInvestmentComponent', () => {
  let component: PassiveInvestmentComponent;
  let fixture: ComponentFixture<PassiveInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
