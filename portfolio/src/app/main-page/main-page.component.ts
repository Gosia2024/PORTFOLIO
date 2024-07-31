import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponentsComponent } from './main-components/main-components.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MainComponentsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
