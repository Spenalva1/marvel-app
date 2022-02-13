import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeroListComponent]
})
export class HeroComponentsModule { }
