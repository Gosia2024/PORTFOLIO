import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() menuClosed: EventEmitter<boolean> = new EventEmitter();

  public aboutMeOpen = false;
  public skillsOpen = false;
  public portfolioOpen = false;

  

  closeMenu(): void {
    this.menuClosed.emit(false);
    document.body.style.overflow = 'auto';
  }

  setAboutMeOpen(): void {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
  }

  setSkillsOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  setPortfolioOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = document.querySelector('.bg') as HTMLElement;
    const offset = window.scrollY;
    if (header) {
      header.style.top = `${offset}px`;
    }
  }
}

