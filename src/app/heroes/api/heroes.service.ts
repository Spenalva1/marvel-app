import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroesService extends HttpService {

  constructor() {
    super();
  }

  public getHeroes(): Observable<Hero[]> {
    return this.get('https://gateway.marvel.com:443/v1/public/characters', {
      apikey: environment.apikey
    }).pipe(
      map(data => data.results.map(hero => ({
        name: hero.name,
        thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        comicsAvailable: hero.comics.available,
        storiesAvailable: hero.stories.available,
        seriesAvailable: hero.series.available,
      } as Hero)))
    );
  }
}
