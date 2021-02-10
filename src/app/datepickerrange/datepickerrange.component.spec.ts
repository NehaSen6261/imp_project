import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerrangeComponent } from './datepickerrange.component';

describe('DatepickerrangeComponent', () => {
  let component: DatepickerrangeComponent;
  let fixture: ComponentFixture<DatepickerrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
