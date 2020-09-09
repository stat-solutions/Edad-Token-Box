import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanel1Component } from './left-panel1.component';

describe('LeftPanelComponent', () => {
  let component: LeftPanel1Component;
  let fixture: ComponentFixture<LeftPanel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
