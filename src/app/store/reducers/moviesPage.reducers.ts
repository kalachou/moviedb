import { EMoviesPageActions } from '../actions/moviesPage.actions';
import { MoviesPageActions } from '../actions/moviesPage.actions';
import { initialMoviesPageState, MoviesPageState } from '../state/moviesPage.state';


export const moviesPageReducers = (
    state = initialMoviesPageState,
    action: MoviesPageActions
): MoviesPageState => {
    switch (action.type) {
        case EMoviesPageActions.LoadPage:
            return {
                items: null,
                page: action.payload
            };

        default :
            return null;
    }
};
