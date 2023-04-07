import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-serie-tv',
  templateUrl: './serie-tv.component.html',
  styleUrls: ['./serie-tv.component.scss'],
})
export class SerieTvComponent {
  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[];
  SliderDati2!: IResponseVideo[];
  contenuti = this.videoService.getAllSerie();
  generi!: string[];
  isFilter = false;
  isSerieTv = 'serietv';

  ngOnInit(): void {
    this.jsonSeriesTvData();
    this.jsonDiTendenzaSerieData();
    this.GetSerieTVGeneri();
  }

  jsonSeriesTvData() {
    this.SliderDati = this.videoService.getSeriesTVVideos();
    console.log('this.jsonSeriesTvData: ', this.SliderDati);
  }

  jsonDiTendenzaSerieData() {
    this.SliderDati2 = this.videoService.getDiTendenzaSeriesTVVideos();
    console.log('this.jsonDiTendenzaSerieData: ', this.SliderDati2);
  }

  GetSerieTVGeneri() {
    this.generi = this.videoService.getSerieTvGeneri();
  }

  GetSerieTVByGenere(genere: string) {
    console.log(' GetFilmbyGenere genere:', genere);
    this.isFilter = true;
    const options = { genere: genere };
    this.SliderDati = this.videoService.getSerieTVByGenere(options);
  }
}
