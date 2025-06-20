import { Component,input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    console.log('Add to cart clicked');
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());

    

  }
  
}
