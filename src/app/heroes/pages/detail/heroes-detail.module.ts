import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeroesDetailPage } from './heroes-detail.page';

import { HeroesDetailPageRoutingModule } from './heroes-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesDetailPageRoutingModule
  ],
  declarations: [HeroesDetailPage]
})
export class HeroesDetailPageModule { }
