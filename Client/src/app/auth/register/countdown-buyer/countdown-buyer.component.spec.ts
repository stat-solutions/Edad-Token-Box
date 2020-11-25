import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownBuyerComponent } from './countdown-buyer.component';

describe('CountdownBuyerComponent', () => {
  let component: CountdownBuyerComponent;
  let fixture: ComponentFixture<CountdownBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
