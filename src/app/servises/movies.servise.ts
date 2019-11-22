import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesServise {

  private initialPage = 1;

  constructor(private http: HttpClient) { }

  public getMoviesPage(page: number = this.initialPage) {
    let resultArray: Movie[];
    let resultRequest: any;

    forkJoin(
      this.http.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=en-US&api_key=0de915948d52603403cc6102091989f6`)
    ).subscribe((data: any) => resultRequest = data.results);

    // convert into camelcased and remove unnesessary proprties
    resultArray = resultRequest.map((x: { vote_average: any; poster_path: any; overview: any; title: any; }) => ({
      voteAverage: x.vote_average,
      posterPath: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`,
      overview: x.overview,
      title: x.title
    }));

    return resultArray;

    /*
    // average vote
    arr[0].vote_average

    // picture
    `https://image.tmdb.org/t/p/w600_and_h900_bestv2${arr[0].poster_path}`

    // info
    arr[0].overview

    // title
    arr[0].title
    */
  }

}
