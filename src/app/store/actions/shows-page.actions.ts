import { Action } from '@ngrx/store';

import { TvShow } from '../../models/tvshow.interface';

export enum EShowsPageActions {
    LoadShowsPage = 'Load shows page',
    LoadShowsPageSuccess = 'Loading shows page is successful',
    LoadShowsPageFail = 'Loading shows page is failed',
    LoadShowInfo = 'Loading info about a show',
    LoadShowInfoSuccess = 'Loading info about a show is successful',
    LoadShowInfoFail = 'Loading info about a show is failed',
    AddNewShowInfo = 'Add  new show to list'
}

export class LoadShowsPage implements Action {
    public readonly type = EShowsPageActions.LoadShowsPage;
    constructor(public payload: number = 1) { }
}

export class LoadShowsPageSuccess implements Action {
    public readonly type = EShowsPageActions.LoadShowsPageSuccess;
    constructor(public payload: TvShow[]) { }
}

export class LoadShowsPageFail implements Action {
    public readonly type = EShowsPageActions.LoadShowsPageFail;
    constructor(public payload: Error) { }
}

export class LoadShowInfo implements Action {
    public readonly type = EShowsPageActions.LoadShowInfo;
    constructor(public payload: number) { }
}

export class LoadShowInfoSuccess implements Action {
    public readonly type = EShowsPageActions.LoadShowInfoSuccess;
    constructor(public payload: TvShow) { }
}

export class LoadShowInfoFail implements Action {
    public readonly type = EShowsPageActions.LoadShowInfoFail;
    constructor(public payload: Error) { }
}

export class AddNewShowInfo implements Action {
    public readonly type = EShowsPageActions.AddNewShowInfo;
    constructor(public payload: TvShow) {}
  }

export type ShowsPageActions = LoadShowsPage
    | LoadShowsPageSuccess
    | LoadShowsPageFail
    | LoadShowInfo
    | LoadShowInfoSuccess
    | LoadShowInfoFail
    | AddNewShowInfo;
