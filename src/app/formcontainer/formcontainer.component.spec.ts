import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontainerComponent } from './formcontainer.component';

describe('FormcontainerComponent', () => {
  let component: FormcontainerComponent;
  let fixture: ComponentFixture<FormcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcontainerComponent]
    });
    fixture = TestBed.createComponent(FormcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
