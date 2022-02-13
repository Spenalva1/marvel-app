import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeroesPage } from './heroes.page';

import { HeroesPageRoutingModule } from './heroes-routing.module';
import { HeroComponentsModule } from '../../components/hero-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroComponentsModule,
    HeroesPageRoutingModule
  ],
  declarations: [HeroesPage]
})
export class HeroesPageModule { }
