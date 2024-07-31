import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MenuComponent } from '../menu/menu.component';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-main-components',
  standalone: true,
  imports: [LandingPageComponent,PortfolioComponent,SkillsComponent,AboutMeComponent, MenuComponent,PrivacyComponent   ],
  templateUrl: './main-components.component.html',
  styleUrl: './main-components.component.scss'
})
export class MainComponentsComponent {

}
