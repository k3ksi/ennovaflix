import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { Contenuti, VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[];
  SliderDati2!: IResponseVideo[];
  contenuti = this.videoService.getAllFilms();
  generi!: string[];
  isFilter: boolean = false;
  isFilm = 'film';

  ngOnInit(): void {
    this.jsonFilmData();
    this.jsonSeriesTvData();
    this.GetFilmGeneri();
  }
  jsonFilmData() {
    this.SliderDati = this.videoService.getFilmsVideos();
  }

  jsonSeriesTvData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log('this.SliderDati2: ', this.SliderDati2);
  }

  GetFilmGeneri() {
    this.generi = this.videoService.getFilmsGeneri();
  }

  GetFilmbyGenere(genere: string) {
    console.log(' GetFilmbyGenere genere:', genere);
    this.isFilter = true;
    const options = { genere: genere };
    this.SliderDati = this.videoService.getFilmsByGenere(options);
  }

  GetSerieTvbyGenere(genere: string) {
    console.log('genere:', genere);
    // da fare nuova query
  }
}
