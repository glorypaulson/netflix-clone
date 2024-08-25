import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IvideoContents } from 'src/app/models/videoContents.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-moviecarousel',
  templateUrl: './moviecarousel.component.html',
  styleUrls: ['./moviecarousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ])
    ])
  ]
})

export class MoviecarouselComponent implements OnInit, AfterViewInit {

  @Input() videoContents: IvideoContents[] = [];
  @Input() title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  
  constructor() { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
      this.initSwiper();
  }

  setHoverMovie(content: IvideoContents): void {
    this.selectedContent = content.title ?? content.name;
  }

  removeMovie(){
    this.selectedContent = null;
  }

  private initSwiper(){
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop:true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }
}
