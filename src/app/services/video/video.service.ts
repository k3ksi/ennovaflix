import { Injectable } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  dataTest: IResponseVideo[] = [
    {
      "id": 0,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 1,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 2,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 3,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 4,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 5,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 6,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 7,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 8,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },
    {
      "id": 9,
      "titolo": "titolo",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "genere",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png",
      "isSerie": false
    },

  ];
  constructor() { }

  // video
  getFilmsVideos(): IResponseVideo[] {
    return this.dataTest;
  }

  // series
  getSeriesTVVideos(): IResponseVideo[] {
    return this.dataTest;
  }

  // preferiti video
  getPreferitiFilmsVideos(): IResponseVideo[] {
    return this.dataTest;
  }

  // preferiti serie
  getPreferitiSeriesTVVideos(): IResponseVideo[] {
    return this.dataTest;
  }

  // di tendenza
  getDiTendenzaFilmsVideos(): IResponseVideo[] {
    return this.dataTest;
  }

  // di tendenza
  getDiTendenzaSeriesTVVideos(): IResponseVideo[] {
    return this.dataTest;
  }

}
