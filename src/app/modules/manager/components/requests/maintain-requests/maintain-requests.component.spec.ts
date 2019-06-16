import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainRequestsComponent } from './maintain-requests.component';

describe('MaintainRequestsComponent', () => {
  let component: MaintainRequestsComponent;
  let fixture: ComponentFixture<MaintainRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
