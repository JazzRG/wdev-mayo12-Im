import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcursoComponent } from './listarcurso.component';

describe('ListarcursoComponent', () => {
  let component: ListarcursoComponent;
  let fixture: ComponentFixture<ListarcursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarcursoComponent]
    });
    fixture = TestBed.createComponent(ListarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
