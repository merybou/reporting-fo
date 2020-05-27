import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProjetsComponent } from './list-projets.component';

describe('ListProjetsComponent', () => {
  let component: ListProjetsComponent;
  let fixture: ComponentFixture<ListProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
