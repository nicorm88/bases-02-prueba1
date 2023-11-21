import { InstitutoComponent } from './instituto.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ListaComponent', () => {
  let component: InstitutoComponent;
  let fixture: ComponentFixture<InstitutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutoComponent]
    });
    fixture = TestBed.createComponent(InstitutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
