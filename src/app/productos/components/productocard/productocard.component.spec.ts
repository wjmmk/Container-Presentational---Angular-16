import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductocardComponent } from './productocard.component';

describe('ProductocardComponent', () => {
  let component: ProductocardComponent;
  let fixture: ComponentFixture<ProductocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductocardComponent]
    });
    fixture = TestBed.createComponent(ProductocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
