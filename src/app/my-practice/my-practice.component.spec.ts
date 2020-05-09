import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPRacticeComponent } from './my-practice.component';

describe('MyPRacticeComponent', () => {
  let component: MyPRacticeComponent;
  let fixture: ComponentFixture<MyPRacticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPRacticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPRacticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
