import { Component } from '@angular/core';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Globalization]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private globalization: Globalization,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide()
    this.getDeviceLanguage();
  }


  async getDeviceLanguage() {
    let lang: string;
    if (window.Intl && typeof window.Intl === 'object') {
      lang = navigator.language;
    } else {
      try {
        const res = await this.globalization.getPreferredLanguage();
        lang = res.value;
      } catch { }
    }
    this.languageService.setLanguage(lang?.slice(0, 2) || 'en')
  }
}
