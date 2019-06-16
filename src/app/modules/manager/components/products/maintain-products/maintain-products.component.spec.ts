import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainProductsComponent } from './maintain-products.component';

describe('MaintainProductsComponent', () => {
  let component: MaintainProductsComponent;
  let fixture: ComponentFixture<MaintainProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
