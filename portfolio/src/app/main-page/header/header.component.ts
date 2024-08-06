
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openMenuChange: EventEmitter<boolean> = new EventEmitter();

  constructor(public translateService: TranslateService, public translationService: TranslationService) { }

  langBoolean = inject(TranslationService);

  aboutMeOpen = false;
  skillsOpen = false;
  portfolioOpen = false;


  openMenu() {
    this.openMenuChange.emit(true);
    document.body.style.overflow = 'hidden';
  }

  handleClick(event: MouseEvent) {
    event.preventDefault(); 
    this.openMenu();
   
  }

  setAboutMeOpen() {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
    
  }

  setSkillsOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  setPortfolioOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
   
  }
  changeLanguage(langCode: string) {
    this.langBoolean.changeLanguageService(langCode);
  }
}
