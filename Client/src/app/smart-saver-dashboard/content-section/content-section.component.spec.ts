import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentSectionSaverComponent } from './content-section-saver.component';


describe('ContentSectionComponent', () => {
  let component: ContentSectionSaverComponent;
  let fixture: ComponentFixture<ContentSectionSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
