import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  autoSlideInterval: any;

  slides = [
    {
      brand: 'SAMSUNG',
      product: 'Galaxy Tab S10 FE',
      description: 'Diseño premium, y rendimiento fluido',
      discount: '26% OFF',
      extra: '*Incluye S Pen + Book Cover',
      imageUrl: 'https://media.istockphoto.com/id/1397895173/es/foto/vista-panor%C3%A1mica-de-antigua-al-amanecer.jpg?s=1024x1024&w=is&k=20&c=UmXdKOTEO8F0rutjbEZtTECyZDd6TrjdeKQ3r3Mn_9s=',
      buttonText: 'Clic Aquí',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      discountColor: 'bg-blue-500'
    },
    {
      brand: 'APPLE',
      product: 'iPhone 14 Pro',
      description: 'Cámara avanzada, diseño elegante',
      discount: '15% OFF',
      extra: '*Incluye cargador MagSafe',
      imageUrl: 'https://media.istockphoto.com/id/1397507430/es/foto/antigua-en-el-fondo-del-volc%C3%A1n-de-agua-al-amanecer.jpg?s=1024x1024&w=is&k=20&c=LtJW4vH32phZRc3HsFUn5_vtdbdtZrRWZ-HyeYELtzg=',
      buttonText: 'Clic Aquí',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      discountColor: 'bg-purple-500'
    },
    {
      brand: 'SONY',
      product: 'PlayStation 5',
      description: 'Experiencia de juego inmersiva',
      discount: '10% OFF',
      extra: '*Incluye mando adicional',
      imageUrl: 'https://media.istockphoto.com/id/1288360720/es/foto/ciudad-de-antigua-guatemala.jpg?s=2048x2048&w=is&k=20&c=hrf634rW0unU7tU2QbXf2G6ftrhGax1T42El23bvVqY=',
      buttonText: 'Clic Aquí',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      discountColor: 'bg-green-500'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}