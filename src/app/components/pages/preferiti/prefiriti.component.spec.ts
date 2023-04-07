import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitiComponent } from './preferiti.component';
import { SliderComponent } from '../../slider/slider.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrefiritiComponent', () => {
  let component: PreferitiComponent;
  let fixture: ComponentFixture<PreferitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferitiComponent, SliderComponent],
      imports: [RouterModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PreferitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
