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
    const params = new HttpParams()
      .set('page', page.toString())
      .set('language', 'en-US')
      .set('api_key', '0de915948d52603403cc6102091989f6');

    return forkJoin(
      this.http.get('https://api.themoviedb.org/3/movie/popular', { params })
    );

  }

  public getMovieInfo(movieID: number) {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('api_key', '0de915948d52603403cc6102091989f6');

    return this.http.get(`https://api.themoviedb.org/3/movie/${ movieID }`, { params });
  }

}
