import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]
  SliderDati2!: IResponseVideo[]
  isFilm = "film"
  isSerieTv = 'serietv'
  contenuti = this.videoService.getAllContenuti();
  ngOnInit(): void {
    this.jsonFilmData();
    this.jsonSeriesTvData();

  }
  jsonFilmData() {
    this.SliderDati = this.videoService.getFilmsVideos();
  }

  jsonSeriesTvData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log("this.SliderDati2: " , this.SliderDati2)
  }


}
