import { Action } from '@ngrx/store';

import { TvShow } from '../../models/tvshow.interface';

export enum EShowsPageActions {
    LoadPage = 'Load shows page',
    LoadPageSuccess = 'Loading shows page is successful',
    LoadPageFail = 'Loading shows page is failed',
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
