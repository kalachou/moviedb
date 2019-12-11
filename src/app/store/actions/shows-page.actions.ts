import { Action } from '@ngrx/store';

import { TvShow } from '../../models/tvshow.interface';

export enum EShowsPageActions {
    LoadPage = 'Load page',
    LoadPageSuccess = 'Loading page is succesful',
    LoadPageFail = 'Loading page is failed',
}

export class LoadPage implements Action {
    public readonly type = EShowsPageActions.LoadPage;
    constructor(public payload: number = 1) {}
}

export class LoadPageSuccess implements Action {
    public readonly type = EShowsPageActions.LoadPageSuccess;
    constructor(public payload: TvShow[]) {}
}

export class LoadPageFail implements Action {
    public readonly type = EShowsPageActions.LoadPageFail;
    constructor(public payload: Error) {}
}

export type ShowsPageActions = LoadPage | LoadPageSuccess | LoadPageFail;
