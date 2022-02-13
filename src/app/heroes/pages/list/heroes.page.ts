import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../api/heroes.service';
import { IonAlertService } from '../../../services/ion-alert.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss'],
})
export class HeroesPage implements OnInit {

  public title = '';
  public heroes: Hero[] = [];
  public loading = true;

  constructor(
    private router: Router,
    private heroesService: HeroesService,
    private ionAlertService: IonAlertService,
    private languageService: LanguageService
  ) {
    this.languageService.get('heroes-list-title').then(text => this.title = text)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroesService.getHeroes().pipe(take(1)).subscribe(
      heroes => this.heroes = heroes,
      () => this.showErrorAlert(),
      () => this.loading = false
    );
  }

  private async showErrorAlert() {
    const [message, header, cancel, retry] = await Promise.all([
      await this.languageService.get('heroes-list-error'),
      await this.languageService.get('alert-error-header'),
      await this.languageService.get('alert-error-cancel'),
      await this.languageService.get('alert-error-retry'),
    ])
    this.ionAlertService.showAlert({
      header,
      message,
      buttons: [
        {
          text: cancel,
          role: 'cancel'
        },
        {
          text: retry,
          role: 'retry',
          handler: () => this.getHeroes()
        }
      ]
    });
  }

  public goToHeroDetail(hero: Hero) {
    const navigationExtras: NavigationExtras = {
      state: {
        hero
      }
    }
    this.router.navigateByUrl('/heroes/detail', navigationExtras);
  }
}
