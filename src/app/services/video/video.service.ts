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

  ];
  constructor() { }


  getVideos(): IResponseVideo[] {
    console.log(this.dataTest)
    return this.dataTest;
  }

}
