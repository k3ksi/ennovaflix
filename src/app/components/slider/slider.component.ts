import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import IResponseVideo from 'src/app/interfaces/IResponseVideo/iresponse-video';
import { VideoService } from '../../services/video/video.service';
import Swiper from 'tiny-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit , AfterViewInit {


  @ViewChild('swiperContainer') swiperContainer!: ElementRef<HTMLElement>;
  @Input() SliderDati!: IResponseVideo[]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("swiperContainer : " , this.swiperContainer.nativeElement)
    const swiperContainerElement = this.swiperContainer.nativeElement
    const swiper = new Swiper(swiperContainerElement);

  }


}
