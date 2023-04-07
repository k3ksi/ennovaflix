import { Component, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../../services/video/video.service';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import IRecenzioni from 'src/app/interfaces/IResponseVideo/IRecenzioni';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private videoService = inject(VideoService);

  details!: IResponseVideo;

  recenzioni: Array<IRecenzioni> = [
    {
      nickname: 'Elena',
      rating: 4,
      descrizione: 'Molto bello',
    },
    {
      nickname: 'Marco',
      rating: 2,
      descrizione: 'Non mi è piaciuto',
    },
    {
      nickname: 'Marta',
      rating: 5,
      descrizione: 'Il mio preferito!',
    },
  ];

  cast = ['Leonardo Di Caprio', 'Sharon Stone'];
  rating = 4.5;
  stagioni = [
    {
      numero_stagione: 1,
      numero_puntate: 5,
    },
    {
      numero_stagione: 2,
      numero_puntate: 7,
    },
  ];

  write: boolean = false;
  puntate: number[] = [];
  ratingValue = 0;

  ngOnInit(): void {
    this.getFilmOrSerieTv();
  }

  onSelect(val: number) {
    this.puntate = [];
    this.puntate = Array.from(
      { length: this.stagioni[val - 1].numero_puntate },
      (_, i) => i + 1
    );
  }

  getFilmOrSerieTv(): void {
    this.route.params.subscribe((params) => {
      const id = params['slug'];
      const isFilmOrSerieTv: string = window.location.href
        .split('/')
        .reduce(
          (acc: string, urlsegment: string, index: number, array: string[]) => {
            if (urlsegment.trim() == params['slug']) {
              const isFilmOrSerieTvIndex = index - 1;
              return array[isFilmOrSerieTvIndex];
            }
            return '';
          }
        );
      // console.log("isFilmOrSerieTv: ", isFilmOrSerieTv);
      if (isFilmOrSerieTv == '') {
        throw new Error('si e verificato un errore ');
      }
      // se e un film richiamo il metodo dei film altrimenti sara una serieTV
      this.details =
        isFilmOrSerieTv == 'film'
          ? this.videoService.getFilm(id)
          : this.videoService.getSerieTV(id);
    });
  }
}
