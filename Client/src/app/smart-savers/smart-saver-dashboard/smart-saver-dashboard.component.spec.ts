import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSaverDashboardComponent } from './smart-saver-dashboard.component';

describe('SmartSaverDashboardComponent', () => {
  let component: SmartSaverDashboardComponent;
  let fixture: ComponentFixture<SmartSaverDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSaverDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSaverDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
