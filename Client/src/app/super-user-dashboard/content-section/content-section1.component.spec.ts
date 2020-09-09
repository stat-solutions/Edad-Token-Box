import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSection1Component } from './content-section1.component';

describe('ContentSectionComponent', () => {
  let component: ContentSection1Component;
  let fixture: ComponentFixture<ContentSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
