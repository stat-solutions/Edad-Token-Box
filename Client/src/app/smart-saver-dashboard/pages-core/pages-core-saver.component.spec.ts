import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreSaverComponent } from './pages-core-saver.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreSaverComponent;
  let fixture: ComponentFixture<PagesCoreSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
