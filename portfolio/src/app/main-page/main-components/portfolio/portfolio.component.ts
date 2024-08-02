import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent implements OnInit {
  projects: any[];  // Zdefiniuj właściwość 'projects'

  constructor() {
    // Inicjalizacja 'projects' może nastąpić tutaj lub w ngOnInit
    this.projects = [
      { id: 1, name: 'Project 1', description: 'Description 1', img1: 'Join.png', img2: 'pollo_loco.png' },
      
    ];
  }

  ngOnInit(): void {
    // Możesz również zainicjalizować 'projects' tutaj, jeśli potrzebujesz
  }
}