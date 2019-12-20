import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShowsService {

  private initialPage = 1;

  constructor(private http: HttpClient) { }

  public getShowsPage(page: number = this.initialPage) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('language', 'en-US')
      .set('api_key', '0de915948d52603403cc6102091989f6');

    return this.http.get(
      'https://api.themoviedb.org/3/tv/popular', { params }
      );
  }

  public getShowInfo(showID: number) {
    const params = new HttpParams()
    .set('language', 'en-US')
    .set('api_key', '0de915948d52603403cc6102091989f6');

    return this.http.get(`https://api.themoviedb.org/3/tv/${ showID }`, {params});
  }
}
