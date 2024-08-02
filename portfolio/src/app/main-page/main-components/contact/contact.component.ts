import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
