import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateComponent } from './translate/translate.component';
import { LanguageService } from './shared/language.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TranslateComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [LanguageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
