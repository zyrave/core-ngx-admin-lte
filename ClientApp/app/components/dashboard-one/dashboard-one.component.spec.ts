import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOneComponent } from './dashboard-one.component';

describe('DashboardOneComponent', () => {
  let component: DashboardOneComponent;
  let fixture: ComponentFixture<DashboardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
