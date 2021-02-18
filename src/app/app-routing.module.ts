import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    children: [
      {
        path: '',
        loadChildren: () => import('./films/films.module').then(m => m.FilmsPageModule)
      },
      {
        path: ':filmId',
        loadChildren: () => import('./films/film-details/film-details.module').then(m => m.FilmDetailsPageModule)
      }
    ]

  },
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
