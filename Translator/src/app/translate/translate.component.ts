import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from '../shared/dictionary.model';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent {
  languages: Observable<string[]> | null = null;

  model = new Dictionary('', 'French', '', '');

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageService.fetchLanguages();
  }

  onSubmit() {
    this.languageService
      .translate(this.model.targetLanguageName, this.model.text)
      .subscribe(
        (translatedText) => (this.model.translatedText = translatedText[0])
      );
  }
}
