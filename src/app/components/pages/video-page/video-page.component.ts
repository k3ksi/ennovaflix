import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent {
  @Input() details = {
    titolo: 'Titolo',
    descrizione:
      'Film del 2011 molto avvincente bellissimo ti' +
      ' spenniamo i soldi non ci crederai mai guarda qui sei un pollo arrosto ahahaha',
    rating: 4.5,
    cast: ['Leonardo Di Caprio', 'Sharon Stone'],
    anno: 2011,
    isSerie: true,
    stagioni: [
      {
        numero_stagione : 1,
        numero_puntate : 5
      },
      {
        numero_stagione : 2,
        numero_puntate : 7
      }
    ],
    recensioni: [
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
    ],
  };
  write: boolean = false;
  puntate :number[] = []
  ratingValue=0
  onSelect(val:number){
    this.puntate =  []
    this.puntate = Array.from({ length : this.details.stagioni[val-1].numero_puntate},(_,i)=> i+1);
  }
}
