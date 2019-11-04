import {Action} from '@ngrx/store';

import { IMovie } from '../../models/movie.interface';
import { ITvShow } from '../../models/tvshow.interface';

export enum ELibraryActions {
    AddItem = 'Add item',
    DeleteItem = 'Delete item'
}
