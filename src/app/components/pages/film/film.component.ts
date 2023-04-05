import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {


  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]
  SliderDati2!: IResponseVideo[]

  ngOnInit(): void {
    this.jsonFilmData();
    this.jsonSeriesTvData();
  }
  jsonFilmData() {
    this.SliderDati = this.videoService.getFilmsVideos();
  }

  jsonSeriesTvData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log("this.SliderDati2: ", this.SliderDati2)
  }

}
