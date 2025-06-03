import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  slides = [
    { background: 'https://picsum.photos/1200/800?random=1' }, // Random image 1
    { background: 'https://picsum.photos/1200/800?random=2' }, // Random image 2
    { background: 'https://picsum.photos/1200/800?random=3' }, // Random image 3
  ];

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: { clickable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  swiperInstance!: Swiper;

  ngAfterViewInit(): void {
    this.swiperInstance = new Swiper(this.swiperRef.nativeElement, this.swiperConfig);
  }
}