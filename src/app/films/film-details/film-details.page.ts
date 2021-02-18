import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../film.model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit, OnDestroy {

  film: Film;
  paramsSub: Subscription;
  filmSub: Subscription;

  constructor(private router: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit() {
    this.paramsSub = this.router.paramMap.subscribe(params => {
      const id = params.get('filmId');
      this.filmSub = this.filmsService.getFilm(id).subscribe(film =>
        this.film = film
      );
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.filmSub.unsubscribe();
  }

}
