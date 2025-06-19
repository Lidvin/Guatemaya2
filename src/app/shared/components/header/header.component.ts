import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStateService } from '../../data-acces/cart-state.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
   cartState = inject(CartStateService).state;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Buscar:', searchTerm);
  }
}
