import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// Dekorator @Injectable informuje Angular, że ta klasa będzie dostępna jako usługa w całej aplikacji
@Injectable({
  providedIn: 'root' // Określa, że usługa jest dostępna na poziomie root, czyli w całej aplikacji
})
export class TranslationService {

  // Konstruktor, który przyjmuje TranslateService jako argument i zapisuje go jako publiczną właściwość
  constructor(public translateService: TranslateService) { }

  // Flagi określające aktualnie wybrany język
  english = true; // Angielski jest domyślnie ustawiony na true
  german = false; // Niemiecki jest domyślnie ustawiony na false
  polish = false; // Polski jest domyślnie ustawiony na false

  // Metoda zmieniająca język aplikacji na podstawie podanego kodu języka (langCode)
  changeLanguageService(langCode: string) {
    // Ustawienie języka w TranslateService
    this.translateService.use(langCode);

    // Sprawdzenie, jaki język został wybrany, i ustawienie odpowiednich flag
    if (langCode === 'en') {
      this.english = true;
      this.german = false;
      this.polish = false;
    } else if (langCode === 'de') {
      this.english = false;
      this.german = true;
      this.polish = false;
    } else if (langCode === 'pl') {
      this.english = false;
      this.german = false;
      this.polish = true;
    }
  }
}
