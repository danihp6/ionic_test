import { Injectable } from '@angular/core';
import { Film } from './film.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  API_KEY: String = '1eb384a7';
  BASE_URL: String = `http://www.omdbapi.com/?apikey=${this.API_KEY}`;

  constructor(private http: HttpClient) { }

  getFilms(search: String): Observable<Film[]> {
    return this.http.get(`${this.BASE_URL}&s=${search}`)
      .pipe(
        map(response => response['Response'] == 'True' ? response['Search'].map(
          film => new Film(film)
        ) : [])
      );
  }

  getFilm(id: String) {
    return this.http.get(`${this.BASE_URL}&i=${id}`)
      .pipe(
        map(film => new Film(film)
        )
      );
  }
}
