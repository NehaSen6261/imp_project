import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableDragComponent } from './resizable-drag.component';

describe('ResizableDragComponent', () => {
  let component: ResizableDragComponent;
  let fixture: ComponentFixture<ResizableDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizableDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
