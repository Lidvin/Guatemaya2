import { Injectable, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { signalSlice } from 'ngxtension/signal-slice';
import { Signal } from '@angular/core';
import { ProductsService } from './products.service';
import { Subject, catchError, map, of, startWith, switchMap } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
  hasMore: boolean;
}


export class ProductsSateService {
  
  private productsService = inject(ProductsService);

  
  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,
    hasMore: true,
  };

  changePage$ = new Subject<number>();
/*
  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.productsService.getProducts(page)),
    map((products) => ({
      products,
      status: 'success' as const,
      hasMore: products.length > 0,
    })),
    catchError(() => {
      return of({
        products: [],
        status: 'error' as const,
        hasMore: false,
      });
    }),
  );
*/

/*
  state: Signal<State> = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const })),
      ),
      this.loadProducts$.pipe(
        map((result) => {
          // Solo concatenamos si hay productos nuevos y no hemos alcanzado el final
          const currentProducts = this.state().products;
          const newProducts = result.products.filter(
            (newProduct) => !currentProducts.some((p) => p.id === newProduct.id) // Evitar duplicados por ID
          );
          return {
            products: result.hasMore ? [...currentProducts, ...newProducts] : currentProducts, // No a�adir si no hay m�s
            status: result.status,
            hasMore: result.hasMore,
          };
        })
      ),
    ],
  });
  */
}
