import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProductsComponent } from './slide-products.component';

describe('SlideProductsComponent', () => {
  let component: SlideProductsComponent;
  let fixture: ComponentFixture<SlideProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
