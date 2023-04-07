import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTvComponent } from './serie-tv.component';
import { SelectComponent } from '../../select/select.component';
import { SliderComponent } from '../../slider/slider.component';
import { FilmComponent } from '../film/film.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SerieTvComponent', () => {
  let component: SerieTvComponent;
  let fixture: ComponentFixture<SerieTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieTvComponent, SelectComponent , SliderComponent],
      imports: [RouterModule , RouterTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SerieTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
