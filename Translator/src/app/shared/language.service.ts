import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private http: HttpClient) {}

  fetchLanguages() {
    return this.http.get<string[]>(
      'https://translation-backend-v1-he3umma5vq-ew.a.run.app/'
    );
  }

  translate(targetLanguageName: string, text: string) {
    console.log(targetLanguageName, text);
    return this.http.get<string[]>(
      'https://translation-backend-v1-he3umma5vq-ew.a.run.app/translate',
      {
        params: new HttpParams()
          .set('targetLanguageName', targetLanguageName)
          .set('text', text),
      }
    );
  }
}
