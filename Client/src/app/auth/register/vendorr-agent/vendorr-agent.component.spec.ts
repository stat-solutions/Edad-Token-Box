import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorrAgentComponent } from './vendorr-agent.component';

describe('VendorrAgentComponent', () => {
  let component: VendorrAgentComponent;
  let fixture: ComponentFixture<VendorrAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorrAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorrAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
