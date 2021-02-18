import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from './film.model';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss'],
})
export class FilmsPage implements OnDestroy {

  films: Film[];
  filmsSub: Subscription;

  constructor(private filmsService: FilmsService) { }

  onSearch(search: String) {
    this.filmsSub = this.filmsService.getFilms(search).subscribe(films =>
      this.films = films
    );
  }

  ngOnDestroy() {
    this.filmsSub.unsubscribe();
  }

}
