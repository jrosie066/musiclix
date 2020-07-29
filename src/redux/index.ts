/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers, Store,
} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './search/search-reducer';
import {
  BaseAction, SearchState, ArtistInfoState, ChartState,
} from './types';
import artistReducer from './artist/artist-reducer';
import chartsReducer from './charts/charts-reducer';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

export interface State {
  search: SearchState;
  artist: ArtistInfoState;
  charts: ChartState;
}
const initialState: State = {
  search: {} as SearchState,
  artist: {} as ArtistInfoState,
  charts: {} as ChartState,
};
const reducer = combineReducers({
  search: searchReducer,
  artist: artistReducer,
  charts: chartsReducer,
});
const middleware = process.env.NODE_ENV === 'development' ? compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) : applyMiddleware(thunk);

export const store: Store<State, BaseAction> = createStore(
  reducer,
  initialState,
  middleware
);
