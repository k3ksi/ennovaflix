import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPageComponent } from './video-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../../button/button.component';
import { RouterModule } from '@angular/router';

describe('VideoPageComponent', () => {
  let component: VideoPageComponent;
  let fixture: ComponentFixture<VideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPageComponent , ButtonComponent ],
      imports: [RouterModule , RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
