import { EShowsPageActions } from '../actions/shows-page.actions';
import { ShowsPageActions } from '../actions/shows-page.actions';
import { initialShowsPageState, ShowsPageState } from '../state/shows-page.state';


export const showsPageReducers = (
    state = initialShowsPageState,
    action: ShowsPageActions
): ShowsPageState => {
    switch (action.type) {
        case EShowsPageActions.LoadPage:
            return {
                ...state,
                currentPage: action.payload
            };
        case EShowsPageActions.LoadPageSuccess:
            return {
                ...state,
                entities: state.entities.concat(action.payload),
            };

        case EShowsPageActions.LoadPageFail:
            console.log(action.payload);
            return state;

        default:
            return state;
    }
};
