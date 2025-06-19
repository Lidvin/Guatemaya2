import { Component } from '@angular/core';
import {SliderComponent} from './components/slider/slider.component';
import ProductListComponent from '../products/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ProductListComponent], 
  providers: [], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
ngOnInit(): void {
    console.log('HomeComponent inicializado');
  }
}