import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaPeliculaComponent } from './grilla-pelicula.component';

describe('GrillaPeliculaComponent', () => {
  let component: GrillaPeliculaComponent;
  let fixture: ComponentFixture<GrillaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
