import { EShowsPageActions } from '../actions/shows-page.actions';
import { ShowsPageActions } from '../actions/shows-page.actions';
import { initialShowsPageState, ShowsPageState } from '../state/shows-page.state';


export const showsPageReducers = (
    state = initialShowsPageState,
    action: ShowsPageActions
): ShowsPageState => {
    switch (action.type) {
        case EShowsPageActions.LoadShowsPage:
            return {
                ...state,
                currentPage: action.payload
            };
        case EShowsPageActions.LoadShowsPageSuccess:
            return {
                ...state,
                entities: state.entities.concat(action.payload),
            };

        case EShowsPageActions.LoadShowsPageFail:
            console.log(action.payload);
            return state;

        case EShowsPageActions.LoadShowInfo:
            return {
                ...state,
                selectedShowID: action.payload
            };

        case EShowsPageActions.LoadShowInfoSuccess:
            console.log('reducer', state);
            return {
                ...state,
                selectedShow: action.payload
            };

        case EShowsPageActions.LoadShowInfoFail:
            console.log(action.payload);
            return state;


        default:
            return state;
    }
};
