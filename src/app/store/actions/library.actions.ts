import {Action} from '@ngrx/store';

import { Movie } from '../../models/movie.interface';
import { TvShow } from '../../models/tvshow.interface';

export enum ELibraryActions {
    AddItem = 'Add item to library',
    DeleteItem = 'Delete item from library',
    ToggleItem = 'Toggle the item in library',
    FilterLibrarySearch = 'Search items in library'
}

export class AddItem implements Action {
    public readonly type = ELibraryActions.AddItem;
    constructor(public payload: (Movie|TvShow)) {}
}

export class DeleteItem implements Action {
    public readonly type = ELibraryActions.DeleteItem;
    constructor(public payload: (Movie|TvShow)) {}
}

export class ToggleItem implements Action {
  public readonly type = ELibraryActions.ToggleItem;
  constructor(public payload: (Movie|TvShow)) {}
}

export class FilterLibrarySearch implements Action {
  public readonly type = ELibraryActions.FilterLibrarySearch;
  constructor(public payload: string) {}
}

export type LibraryActions = AddItem | DeleteItem | ToggleItem | FilterLibrarySearch;
