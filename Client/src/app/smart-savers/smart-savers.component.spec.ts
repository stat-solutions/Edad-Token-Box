import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSaversComponent } from './smart-savers.component';

describe('SmartSaversComponent', () => {
  let component: SmartSaversComponent;
  let fixture: ComponentFixture<SmartSaversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSaversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSaversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
