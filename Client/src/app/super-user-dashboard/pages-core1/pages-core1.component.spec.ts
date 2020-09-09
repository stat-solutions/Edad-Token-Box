import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCore1Component } from './pages-core.component1';

describe('PagesCoreComponent', () => {
  let component: PagesCore1Component;
  let fixture: ComponentFixture<PagesCore1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCore1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
