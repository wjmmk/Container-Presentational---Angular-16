import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpresentationalComponent } from './formpresentational.component';

describe('FormpresentationalComponent', () => {
  let component: FormpresentationalComponent;
  let fixture: ComponentFixture<FormpresentationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormpresentationalComponent]
    });
    fixture = TestBed.createComponent(FormpresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
