import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent {
  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[];
  SliderDati2!: IResponseVideo[];
  isFilm = 'film';
  isSerieTv = 'serietv';
  contenuti = this.videoService.getAllPreferiti();
  ngOnInit(): void {
    this.jsonFilmsData();
    this.jsonPreferitiDiTendezaData();
  }
  jsonFilmsData() {
    this.SliderDati = this.videoService.getFilmsVideos();
  }

  jsonPreferitiDiTendezaData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log('this.SliderDati2: ', this.SliderDati2);
  }
}
