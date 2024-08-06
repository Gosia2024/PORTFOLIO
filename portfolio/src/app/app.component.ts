import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './main-page/footer/footer.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuComponent } from './main-page/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, MainPageComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  menuOpen = false;

  ngOnInit(): void {
    AOS.init();
  }
}
