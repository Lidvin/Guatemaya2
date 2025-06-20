import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { ProductDetailSateService } from '../../shared/data-acces/proudct-detail-state.service';
import { CartStateService } from '../../shared/data-acces/cart-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailSateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailSateService).state;
  cartState = inject(CartStateService).state;

  private route = inject(ActivatedRoute);

  id: string;

  constructor() {
    // Obtén el parámetro 'id' de la ruta
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Usa el id en el effect
    effect(() => {
      this.productDetailState.getById(this.id);
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }

  buyNow() {
    // Implement buy now logic (e.g., redirect to checkout)
   // console.log('Buy Now clicked for', this.productDetailState.state.product()?.title);
  }

  // Método para cambiar la imagen (implementación básica)
  changeImage(imageUrl: string) {
   // this.productDetailState.state.updateProduct({ ...this.productDetailState.state.product()!, image: imageUrl });
  }
}