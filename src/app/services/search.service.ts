import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type ContentFound = {
  title: string;
  id: number;
  genre: string[];
  isSeries: boolean;
  urlImage: string;
  url?: string;
};
export type ContentArray = Array<ContentFound>;
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  contentFound$ = new BehaviorSubject<ContentArray | null>(null);
  results(searchValue: string) {
    const mock: ContentArray = [
      {
        title: 'Il Gladiatore',
        id: 10,
        genre: ['Azione'],
        isSeries: false,
        urlImage: 'ilgladiatore.jpg',
      },
      {
        title: 'Spongebob',
        id: 10,
        genre: ['Cartone Animato'],
        isSeries: true,
        urlImage: 'spongebob.jpg',
      },
      {
        title: 'Titanic',
        id: 15,
        genre: ['Azione', 'Drammatico'],
        isSeries: false,
        urlImage: 'titanic.jpg',
      },
    ];
    const returnMock: ContentArray=[];
    mock.map((item) => {
      if (
        item.title.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
        item.genre.includes(searchValue)
      ) {
        if (item.isSeries) {
          item.url = '/serie/' + item.id;
        } else {
          item.url = '/film/' + item.id;
        }
        returnMock.push(item);
      }
    });
    returnMock.length > 0
      ? this.contentFound$.next(returnMock)
      : this.contentFound$.next(null);
  }
  constructor() {}
}
