import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormLoginComponent } from './reactive-form-login.component';

describe('ReactiveFormLoginComponent', () => {
  let component: ReactiveFormLoginComponent;
  let fixture: ComponentFixture<ReactiveFormLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
