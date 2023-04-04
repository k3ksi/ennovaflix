import { Component, inject, OnInit } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.scss']
})
export class SliderPageComponent implements OnInit{

  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]

 ngOnInit(): void {
    this.jsonData();
  }
  jsonData() {
    this.SliderDati = this.videoService.getVideos();
  }
}
