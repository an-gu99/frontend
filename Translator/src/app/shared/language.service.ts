import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private http: HttpClient) {}

  fetchLanguages() {
    return this.http.get<string[]>(environment.backendUrl);
  }

  translate(targetLanguageName: string, text: string) {
    console.log(targetLanguageName, text);
    return this.http.get<string[]>(environment.backendUrl + 'translate', {
      params: new HttpParams()
        .set('targetLanguageName', targetLanguageName)
        .set('text', text),
    });
  }
}
