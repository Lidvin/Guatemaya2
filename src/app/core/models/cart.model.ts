
import { Product } from './product.model.js';

export interface CartItem {
  product: Product; // Referencia al modelo de producto
  quantity: number; // Cantidad de este producto en el carrito
}

export interface Cart {
  items: CartItem[]; // Lista de ítems en el carrito
  total: number; // Total del carrito (calculado)
}