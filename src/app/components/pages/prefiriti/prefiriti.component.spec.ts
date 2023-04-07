import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefiritiComponent } from './prefiriti.component';
import { SliderComponent } from '../../slider/slider.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrefiritiComponent', () => {
  let component: PrefiritiComponent;
  let fixture: ComponentFixture<PrefiritiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefiritiComponent , SliderComponent ],
      imports : [ RouterModule , RouterTestingModule] ,
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefiritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
