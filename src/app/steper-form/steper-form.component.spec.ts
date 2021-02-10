import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperFormComponent } from './steper-form.component';

describe('SteperFormComponent', () => {
  let component: SteperFormComponent;
  let fixture: ComponentFixture<SteperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
