import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavControlSidebarComponent } from './nav-control-sidebar.component';

describe('NavControlSidebarComponent', () => {
  let component: NavControlSidebarComponent;
  let fixture: ComponentFixture<NavControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
