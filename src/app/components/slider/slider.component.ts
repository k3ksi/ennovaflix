import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from '../../services/video/video.service';
import Swiper, { SwiperPluginPagination } from 'tiny-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {


  @Input() SliderDati!: IResponseVideo[]
  @Input() isFilmOrSerieTV! : string

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }


}
