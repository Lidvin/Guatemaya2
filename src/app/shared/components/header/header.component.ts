import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
 isMenuOpen = false;
  isDropdownOpen = false;

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