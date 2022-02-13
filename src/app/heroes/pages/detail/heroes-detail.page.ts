import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: 'heroes-detail.page.html',
  styleUrls: ['heroes-detail.page.scss'],
})
export class HeroesDetailPage implements OnInit {

  public otherInfoText = {
    header: '',
    comics: '',
    series: '',
    stories: ''
  };
  public hero: Hero;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private languageService: LanguageService
  ) {
    this.languageService.get('hero-other-information').then(text => this.otherInfoText.header = text);
    this.languageService.get('comics-quantity-label').then(text => this.otherInfoText.comics = text);
    this.languageService.get('series-quantity-label').then(text => this.otherInfoText.series = text);
    this.languageService.get('stories-quantity-label').then(text => this.otherInfoText.stories = text);
  }

  ngOnInit(): void {
    this.hero = this.router.getCurrentNavigation().extras.state?.hero;
    if (!this.hero) this.navCtrl.navigateRoot('/heroes');
  }
}
