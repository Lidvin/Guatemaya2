import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const LIMIT = 5;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        limit: page * LIMIT,
      },
    });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}