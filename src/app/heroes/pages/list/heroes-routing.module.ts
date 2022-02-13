import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPage } from './heroes.page';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: () => import('../detail/heroes-detail.module').then(m => m.HeroesDetailPageModule)
  },
  {
    path: '',
    component: HeroesPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesPageRoutingModule { }
