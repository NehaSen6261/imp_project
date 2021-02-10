import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConMessageComponent } from './con-message.component';

describe('ConMessageComponent', () => {
  let component: ConMessageComponent;
  let fixture: ComponentFixture<ConMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
