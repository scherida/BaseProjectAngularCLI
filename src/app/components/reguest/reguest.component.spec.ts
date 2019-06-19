import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguestComponent } from './reguest.component';

describe('ReguestComponent', () => {
  let component: ReguestComponent;
  let fixture: ComponentFixture<ReguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
