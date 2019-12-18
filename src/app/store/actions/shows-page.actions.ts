import { Action } from '@ngrx/store';

import { TvShow } from '../../models/tvshow.interface';

export enum EShowsPageActions {
    LoadShowsPage = 'Load shows page',
    LoadShowsPageSuccess = 'Loading shows page is successful',
    LoadShowsPageFail = 'Loading shows page is failed',
}

export class LoadShowsPage implements Action {
    public readonly type = EShowsPageActions.LoadShowsPage;
    constructor(public payload: number = 1) {}
}

export class LoadShowsPageSuccess implements Action {
    public readonly type = EShowsPageActions.LoadShowsPageSuccess;
    constructor(public payload: TvShow[]) {}
}

export class LoadShowsPageFail implements Action {
    public readonly type = EShowsPageActions.LoadShowsPageFail;
    constructor(public payload: Error) {}
}

export type ShowsPageActions = LoadShowsPage | LoadShowsPageSuccess | LoadShowsPageFail;
