import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-store';
  showMainContent = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showMainContent = this.router.url === '/';
    });
  }
}
