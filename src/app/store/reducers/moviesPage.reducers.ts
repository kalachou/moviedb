import { EMoviesPageActions } from '../actions/moviesPage.actions';
import { MoviesPageActions } from '../actions/moviesPage.actions';
import { initialMoviesPageState, MoviesPageState } from '../state/moviesPage.satate';


export const moviesPageReducers = (
    state = initialMoviesPageState,
    action: MoviesPageActions
): MoviesPageState => {
    switch (action.type) {
        case EMoviesPageActions.LoadPage:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };

        default :
            return state;
    }
};
