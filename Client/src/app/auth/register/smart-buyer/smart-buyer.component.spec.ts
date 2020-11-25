import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBuyerComponent } from './smart-buyer.component';

describe('SmartBuyerComponent', () => {
  let component: SmartBuyerComponent;
  let fixture: ComponentFixture<SmartBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
