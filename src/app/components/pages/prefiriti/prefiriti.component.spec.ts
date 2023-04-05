import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefiritiComponent } from './prefiriti.component';

describe('PrefiritiComponent', () => {
  let component: PrefiritiComponent;
  let fixture: ComponentFixture<PrefiritiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefiritiComponent ]
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
