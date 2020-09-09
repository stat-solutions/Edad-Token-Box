import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelSaverComponent } from './left-panel-saver.component';

describe('LeftPanelComponent', () => {
  let component: LeftPanelSaverComponent;
  let fixture: ComponentFixture<LeftPanelSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
