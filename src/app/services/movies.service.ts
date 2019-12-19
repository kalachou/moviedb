import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private initialPage = 1;

  constructor(private http: HttpClient) { }

  public getMoviesPage(page: number = this.initialPage) {
    /* const params = new HttpParams();
    params.set('page', page.toString());
    params.set('language', 'en-US');
    params.set('api_key', '0de915948d52603403cc6102091989f6');

    return forkJoin(
      this.http.get('https://api.themoviedb.org/3/movie/popular', {...params}));
 */

    return forkJoin(
      this.http.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=en-US&api_key=0de915948d52603403cc6102091989f6`)
    );
  }
  public getMovieInfo(movieID: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=0de915948d52603403cc6102091989f6&language=en-US`);
  }

}
