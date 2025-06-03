import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true, // Ensure standalone is explicitly set (though it’s implied since there’s no app.module.ts)
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Use styleUrls instead of styleUrl
})
export class AppComponent {
  title = 'signal-store';
}