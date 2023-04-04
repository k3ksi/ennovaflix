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


  @ViewChild('swiperContainer') swiperContainer!: ElementRef<HTMLElement>;
  @Input() SliderDati!: IResponseVideo[]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiperContainerElement = this.swiperContainer.nativeElement
    // slidesPerView : 3.5 e a 3.5 cois si vede quella immagine a meta che ci fa capire che e uno slider
    const swiper = new Swiper(swiperContainerElement, { direction: 'horizontal', spaceBetween: 50, slidesPerView: 3.5 });

  }


}
