import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ShowsService } from '../../services/shows.service';
import { Injectable } from '@angular/core';
import {
    EShowsPageActions,
    LoadShowsPage,
    LoadShowsPageSuccess,
    LoadShowsPageFail,
    LoadShowInfo,
    LoadShowInfoSuccess,
    LoadShowInfoFail
} from '../actions/shows-page.actions';
import { TvShow } from '../../models/tvshow.interface';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ShowsPageEffects {
    @Effect()
    getShowsPage$ = this.actions$.pipe(
        ofType<LoadShowsPage>(EShowsPageActions.LoadShowsPage),
        switchMap((action: LoadShowsPage) => {
            const pageNumber = action.payload;
            let showsChunk: TvShow[];
            let resultRequest: any;
            return this.showsService.getShowsPage(pageNumber).pipe(
                map(data => {
                    resultRequest = data['results'];
                    showsChunk = resultRequest.map((x: any) => ({
                        id: x.id,
                        title: x.name,
                        voteAverage: x.vote_average,
                        // how to handle case without any picture at all
                        posterPath: (x.poster_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`
                            : console.log(`No poster for this item and oter image is ${x.backdrop_path}`)),
                        overview: x.overview
                    }));
                    return new LoadShowsPageSuccess(showsChunk);
                }),
                catchError(err => of(new LoadShowsPageFail(err)))
            );
        })
    );

    @Effect()
    getShowInfo$ = this.actions$.pipe(
        ofType<LoadShowInfo>(EShowsPageActions.LoadShowInfo),
        switchMap((action: LoadShowInfo) => {
            const showID = action.payload;
            let resultRequest: any;
            return this.showsService.getShowInfo(showID).pipe(
                map(data => {
                    resultRequest = [data].map((x: any) => ({
                        id: x.id,
                        title: x.name,
                        voteAverage: x.vote_average,
                        // how to handle case without any picture at all
                        posterPath: (x.poster_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`
                            : console.log(`No poster for this item and oter image is ${x.backdrop_path}`)),
                        overview: x.overview
                    }));
                    return new LoadShowInfoSuccess(resultRequest);
                }),
                catchError(err => of(new LoadShowInfoFail(err)))
            );
        })
    );

    constructor(
        private actions$: Actions,
        private showsService: ShowsService
    ) {
    }




}
