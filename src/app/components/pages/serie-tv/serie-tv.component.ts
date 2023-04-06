import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-serie-tv',
  templateUrl: './serie-tv.component.html',
  styleUrls: ['./serie-tv.component.scss']
})
export class SerieTvComponent {

  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]
  SliderDati2!: IResponseVideo[]

  ngOnInit(): void {
    this.jsonSeriesTvData();
    this.jsonDiTendenzaSerieData();
  }


  jsonSeriesTvData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log("this.jsonSeriesTvData: " , this.SliderDati2)
  }

  jsonDiTendenzaSerieData() {
    this.SliderDati2 = this.videoService.getDiTendenzaSeriesTVVideos();
    console.log("this.jsonDiTendenzaSerieData: " , this.SliderDati2)
  }
}
