import {Action} from '@ngrx/store';

import { Movie } from '../../models/movie.interface';
import { TvShow } from '../../models/tvshow.interface';

export enum ELibraryActions {
    AddItem = 'Add item to library',
    DeleteItem = 'Delete item from library',
}

export class AddItem implements Action {
    public readonly type = ELibraryActions.AddItem;
    constructor(public payload: (Movie|TvShow)) {}
}

export class DeleteItem implements Action {
    public readonly type = ELibraryActions.DeleteItem;
    constructor(public payload: (Movie|TvShow)) {}
}

export type LibraryActions = AddItem | DeleteItem;
