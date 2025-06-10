import { Component, HostListener, inject, input } from '@angular/core';
import { ProductsSateService } from '../../shared/data-acces/products-state.service';
import { CartStateService } from '../../shared/data-acces/cart-state.service';
import { Product } from '../../../core/models/product.model';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsSateService],
})
export default class ProductListComponent {
productsState = inject(ProductsSateService);
  cartState = inject(CartStateService).state;
  private isLoading = false;

      @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isNearBottom() && !this.isLoading && this.productsState.state().hasMore ) {
      this.loadMoreProducts();
    }
  }

  private isNearBottom(): boolean {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return scrollTop + windowHeight >= documentHeight - 200; // 200px antes del final
  }

  private loadMoreProducts() {
    this.isLoading = true;
    const nextPage = this.productsState.state().page + 1;
    this.productsState.changePage$.next(nextPage);
    
    // Esperamos a que el estado se actualice
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Ajusta este tiempo seg�n tu API real
  }

    addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}
