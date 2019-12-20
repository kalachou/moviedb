import { Action } from '@ngrx/store';

import { Movie } from '../../models/movie.interface';

export enum EMoviesPageActions {
  LoadMoviesPage = 'Load page',
  LoadMoviesPageSucces = 'Loading page is succesful',
  LoadMoviesPageFail = 'Loading page is failed',
  LoadMovieInfo = 'Loading info about a movie',
  LoadMovieInfoSuccess = 'Loading info about a movie is successful',
  LoadMovieInfoFail = 'Loading info about a movie is failed',
  AddNewMovieInfo = 'Add  new movie to list'
}

export class LoadMoviesPage implements Action {
    public readonly type = EMoviesPageActions.LoadMoviesPage;
    constructor(public payload: number = 1) {}
}

export class LoadMoviesPageSucces implements Action {
    public readonly type = EMoviesPageActions.LoadMoviesPageSucces;
    constructor(public payload: Movie[]) {}
}

export class LoadMoviesPageFail implements Action {
    public readonly type = EMoviesPageActions.LoadMoviesPageFail;
    constructor(public payload: Error) {}
}

export class LoadMovieInfo implements Action {
  public readonly type = EMoviesPageActions.LoadMovieInfo;
  constructor(public payload: number) {}
}

export class LoadMovieInfoSuccess implements Action {
  public readonly type = EMoviesPageActions.LoadMovieInfoSuccess;
  constructor(public payload: Movie) {}
}

export class LoadMovieInfoFail implements Action {
  public readonly type = EMoviesPageActions.LoadMovieInfoFail;
  constructor(public payload: Error) {}
}

export class AddNewMovieInfo implements Action {
  public readonly type = EMoviesPageActions.AddNewMovieInfo;
  constructor(public payload: Movie) {}
}

export type MoviesPageActions = LoadMoviesPage
| LoadMoviesPageSucces
| LoadMoviesPageFail
| LoadMovieInfo
| LoadMovieInfoSuccess
| LoadMovieInfoFail
| AddNewMovieInfo;
