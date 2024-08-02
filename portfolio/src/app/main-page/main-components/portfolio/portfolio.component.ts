/*import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent implements OnInit {
  projects: any[]; 

  constructor() {
    this.projects = [
      { id: 1, name: 'Join', description: 'Angular|TypeScript|HTML|CSS|Friebase', img1: 'Join.png', img2: 'pollo_loco.png' },
      
    ];
  }

  ngOnInit(): void {
    
  }
}*/

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[];  // Zdefiniuj właściwość 'projects'

  constructor() {
    // Inicjalizacja 'projects' może nastąpić tutaj lub w ngOnInit
    this.projects = [
      {
        id: 1,
        name: 'Join',
        description: 'Angular|TypeScript|HTML|CSS|Friebase',
        img1: 'Join.png',
        img2: 'pollo_loco.png',
        img2Name:'El Pollo Loco',
        img2Description: 'HTML|CSS|Javascript',
        link: 'https://live-link-example.com',
        git: 'https://github.com/example'
      },
    ];
  }

  ngOnInit(): void {
    // Możesz również zainicjalizować 'projects' tutaj, jeśli potrzebujesz
  }
}
