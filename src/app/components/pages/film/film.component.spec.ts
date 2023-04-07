import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { SliderComponent } from '../../slider/slider.component';
import { SelectComponent } from '../../select/select.component';
import { RouterModule } from '@angular/router';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmComponent, SliderComponent, SelectComponent],
      imports: [RouterModule , RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
