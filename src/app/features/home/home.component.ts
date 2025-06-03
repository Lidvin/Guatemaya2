import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsService } from '../shared/data-acces/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent], // No necesitas HttpClientModule aquí si lo configuras en app.config.ts
  providers: [], // Elimina ProductsService de providers
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts(5).subscribe((products: any[]) => {
      this.products = products;
      console.log('Products loaded:', this.products);
    });
  }
}