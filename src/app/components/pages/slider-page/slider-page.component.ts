import { Component, inject, OnInit } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.scss']
})
export class SliderPageComponent implements OnInit{
  ngOnInit(): void {
    this.jsonData();
  }
  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]


  jsonData() {
    this.SliderDati = this.videoService.getVideos();
  }
}
