import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import ProductDetailComponent from './features/products/product-detail/product-detail.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta para la página principal
    { path: 'product/:id', component: ProductDetailComponent }, // Ruta para la página de detalles del producto
    //{ path: 'about', component: AboutComponent }, // Ruta para la página "acerca de"
];
