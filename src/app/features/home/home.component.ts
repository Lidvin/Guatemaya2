import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsService } from '../shared/data-acces/products.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import ProductListComponent from '../products/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ProductListComponent], 
  providers: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}