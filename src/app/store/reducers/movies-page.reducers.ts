import { EMoviesPageActions } from '../actions/movies-page.actions';
import { MoviesPageActions } from '../actions/movies-page.actions';
import { initialMoviesPageState, MoviesPageState } from '../state/movies-page.state';


export const moviesPageReducers = (
  state = initialMoviesPageState,
  action: MoviesPageActions
): MoviesPageState => {
  switch (action.type) {
    case EMoviesPageActions.LoadMoviesPage:
      return {
        ...state,
        page: action.payload
      };
    case EMoviesPageActions.LoadMoviesPageSucces:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };

    case EMoviesPageActions.LoadMoviesPageFail:
      console.log(action.payload);
      return state;

    case EMoviesPageActions.LoadMovieInfo:
      return {
        ...state,
        selectedMovieID: action.payload
      };

    case EMoviesPageActions.LoadMovieInfoSuccess:
      return {
        ...state,
        selectedMovie: action.payload
      };

    case EMoviesPageActions.LoadMovieInfoFail:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};
