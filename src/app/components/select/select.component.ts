import { Component, EventEmitter, Input, Output, OnChanges, ElementRef, ViewChild, inject } from '@angular/core';
import { VideoService } from '../../services/video/video.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  private videoService = inject(VideoService)
  @Input() generi!: string[]
  @ViewChild("select") select!: ElementRef<HTMLSelectElement>;
  @Output() cambioGenere = new EventEmitter()
  // mandare il nuovo elemento all'elelmto padre la pagina e poi da li far partire una nuova richiesta

  onChange() {
    console.log( "val: ", this.select.nativeElement.value);
    const genere = this.select.nativeElement.value
    this.cambioGenere.emit(genere)
  }
}
