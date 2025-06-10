import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../features/shared/data-acces/products.service';
import { ProductsSateService } from '../../../features/shared/data-acces/products-state.service';
import { CartStateService } from '../../../features/shared/data-acces/cart-state.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
productsState = inject(ProductsSateService);
  cartState = inject(CartStateService).state;
  private isLoading = false;
}
