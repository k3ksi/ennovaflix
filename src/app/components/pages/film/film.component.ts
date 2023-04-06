import { Component, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {


  private videoService = inject(VideoService);
  SliderDati!: IResponseVideo[]
  SliderDati2!: IResponseVideo[]
  generi! : string[]

  ngOnInit(): void {
    this.jsonFilmData();
    this.jsonSeriesTvData();
    this.getGeneri();
  }
  jsonFilmData() {
    this.SliderDati = this.videoService.getFilmsVideos();
  }

  jsonSeriesTvData() {
    this.SliderDati2 = this.videoService.getSeriesTVVideos();
    console.log("this.SliderDati2: ", this.SliderDati2)
  }

  getGeneri(){
   this.generi= this.videoService.getGeneri();
  }

  OnClickGenere(genere:string ) : void {
    console.log('genere' , genere)

  }

  GetFilbyGenere(genere:string){
    console.log('genere:', genere)
    // da fare nuova query
  }

}
