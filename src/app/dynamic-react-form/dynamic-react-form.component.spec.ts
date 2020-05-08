import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactFormComponent } from './dynamic-react-form.component';

describe('DynamicReactFormComponent', () => {
  let component: DynamicReactFormComponent;
  let fixture: ComponentFixture<DynamicReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicReactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
