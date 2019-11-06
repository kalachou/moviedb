import {Action} from '@ngrx/store';

import { IMovie } from '../../models/movie.interface';
import { ITvShow } from '../../models/tvshow.interface';

export enum ELibraryActions {
 /*    AddMovie = 'Add movie',
    DeleteMovie = 'Delete movie',
    AddShow = 'Add show',
    DeleteShow = 'Delete show' */
    AddItem = 'Add item to library',
    DeleteItem = 'Delete item from library'
}
