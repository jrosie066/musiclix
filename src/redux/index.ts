/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers, Store,
} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './search/search-reducer';
import { BaseAction, SearchState } from './types';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

export interface State {
  search: SearchState;
}
const initialState: State = {
  search: {} as SearchState,
};
const reducer = combineReducers({
  search: searchReducer,
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
