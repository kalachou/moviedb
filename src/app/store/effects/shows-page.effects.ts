import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ShowsService } from '../../services/shows.service';
import { Injectable } from '@angular/core';
import { EShowsPageActions, LoadPage, LoadPageSuccess, LoadPageFail } from '../actions/shows-page.actions';
import { TvShow } from '../../models/tvshow.interface';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ShowsPageEffects {
    @Effect()
    getShowsPage$ = this.actions$.pipe(
        ofType<LoadPage>(EShowsPageActions.LoadPage),
        switchMap((action: LoadPage) => {
            const pageNumber = action.payload;
            let showsChunk: TvShow[];
            let resultRequest: any;
            return this.showsService.getShowsPage(pageNumber).pipe(
                map(data => {
                    resultRequest = data['results'];
                    showsChunk = resultRequest.map((x: any) => ({
                        title: x.name,
                        voteAverage: x.vote_average,
                        // how to handle case without any picture at all
                        posterPath: (x.poster_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`
                            : console.log(`No poster for this item and oter image is ${x.backdrop_path}`)),
                        overview: x.overview
                    }));
                    return new LoadPageSuccess(showsChunk);
                }),
                catchError(err => of(new LoadPageFail(err)))
            );
        })
    );

    constructor(
        private actions$: Actions,
        private showsService: ShowsService
    ) {
    }




}
