import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

const AVAILABLE_LANGS = ['en', 'es'];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) { }

  public setLanguage(lang: string) {
    this.translateService.defaultLang = 'en';
    if (AVAILABLE_LANGS.includes(lang)) {
      this.translateService.use(lang);
    } else {
      this.translateService.use('en');
    }
  }

  public get(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.translateService.get(key).pipe(take(1)).subscribe(
        (res: string) => resolve(res),
        () => reject('Key not found'),
      );
    });
  }
}
