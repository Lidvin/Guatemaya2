import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsService } from '../shared/data-acces/products.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ProductCardComponent], // No necesitas HttpClientModule aquí si lo configuras en app.config.ts
  providers: [], // Elimina ProductsService de providers
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}