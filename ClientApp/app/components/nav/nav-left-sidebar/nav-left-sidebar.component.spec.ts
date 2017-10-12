import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftSidebarComponent } from './nav-left-sidebar.component';

describe('NavLeftSidebarComponent', () => {
  let component: NavLeftSidebarComponent;
  let fixture: ComponentFixture<NavLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
