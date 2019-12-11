import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShowsService {

  private initialPage = 1;

  constructor(private http: HttpClient) { }

  public getShowsPage(page: number = this.initialPage) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?page=${page}&language=en-US&api_key=0de915948d52603403cc6102091989f6`
      );
  }

}
