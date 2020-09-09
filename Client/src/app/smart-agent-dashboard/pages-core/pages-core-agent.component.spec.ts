import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreAgentComponent } from './pages-core-agent.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreAgentComponent;
  let fixture: ComponentFixture<PagesCoreAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
