import { Injectable } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  dataTest: IResponseVideo[] = [
    {
      "id": 0,
      "titolo": "Jason Bourne",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "azione",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://www.tuttotech.net/wp-content/uploads/2020/04/Jason-Bourne-top10.jpg",
      "isSerie": false
    },
    {
      "id": 1,
      "titolo": "Edge of Tomorrow",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "azione",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://www.tuttotech.net/wp-content/uploads/2020/04/Edge-of-Tomorrow-top10.jpg",
      "isSerie": false
    },
    {
      "id": 2,
      "titolo": "point blank",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "azione",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://www.tomshw.it/images/images/2020/04/point-blank-90801.jpg",
      "isSerie": false
    },
    {
      "id": 3,
      "titolo": "maxresdefault",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "drammatico",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://i.ytimg.com/vi/u0lngXYM7DM/maxresdefault.jpg",
      "isSerie": false
    },
    {
      "id": 4,
      "titolo": "le pagine della nostra vita",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "drammatico",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://www.iodonna.it/wp-content/uploads/2019/02/le-pagine-della-nostra-vita-768x511.jpg",
      "isSerie": false
    },
    {
      "id": 5,
      "titolo": "migliori film drammatici",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "drammatico",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://cuneo.unicusano.it/wp-content/uploads/2018/08/migliori-film-drammatici-768x432.jpg",
      "isSerie": false
    },
    {
      "id": 6,
      "titolo": "locandina casuale2 ",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "giallo",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://i.pinimg.com/736x/2f/bd/07/2fbd0745ecb744a3daecba5baff0ed26.jpg",
      "isSerie": false
    },
    {
      "id": 7,
      "titolo": "locandina",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "giallo",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://pad.mymovies.it/filmclub/2020/02/097/locandina.jpg",
      "isSerie": false
    },
    {
      "id": 8,
      "titolo": "locandina2",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "giallo",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://pad.mymovies.it/filmclub/2022/08/018/locandina.jpg",
      "isSerie": false
    },
    {
      "id": 9,
      "titolo": "mistero a crooker house",
      "annoDiUscita": 2019,
      "ratingMedio": 244.20,
      "genere": "giallo",
      "descrizione": "Text2Video-Zero Code and Weights Released by Picsart AI Research (12G VRAM)",
      "tipologia": "asdasd",
      "urlImage": "https://image.tmdb.org/t/p/w300/jfhykHk3PAXzhsJILYlM5seFdg8.jpg",
      "isSerie": false
    },

  ];

  generiFilms: string[] = []
  generiSerieTv: string[] = []
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

  // ritorna tutti i generi dei film
  getFilmsGeneri(): string[] {
    this.dataTest.forEach(video => {
      if (!this.generiFilms.includes(video.genere)) {
        this.generiFilms.push(video.genere)
      }
    });
    return this.generiFilms
  }

   // ritorna un film in base all'id
   getFilm(id:number): IResponseVideo[] {
    return this.dataTest.filter((video) => video.id == id);
  }
  // ritorna i film filtrati per genere
  getFilmsByGenere(options: { genere: string }): IResponseVideo[] {
    return this.dataTest.filter((video) => video.genere == options.genere);
  }


  // ritorna tutti i generi dei film
  getSerieTvGeneri(): string[] {
    this.dataTest.forEach(video => {
      if (!this.generiFilms.includes(video.genere)) {
        this.generiFilms.push(video.genere)
      }
    });
    return this.generiFilms
  }

  // ritorna i seireTv filtrati per genere
  getSerieTVByGenere(options: { genere: string }): IResponseVideo[] {
    return this.dataTest.filter((video) => video.genere == options.genere);
  }


  getGeneriSerieTv(): string[] {
    this.dataTest.forEach(element => {
      if (!this.generiFilms.includes(element.genere)) {
        this.generiFilms.push(element.genere)
      }
    });

    return this.generiFilms
  }

}
