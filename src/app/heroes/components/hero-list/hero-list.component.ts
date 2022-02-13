import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/heroes/interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {

  @Input() heroes: Hero[];
  @Output() heroClick = new EventEmitter<Hero>();

  constructor() { }

  public onHeroClick(hero: Hero) {
    this.heroClick.emit(hero);
  }

}
