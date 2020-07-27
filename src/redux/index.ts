/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './search-reducer';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}
const initialState = {};
const reducer = combineReducers({
  search: searchReducer,
});
const middleware = process.env.NODE_ENV === 'development' ? compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) : applyMiddleware(thunk);

export const store = createStore(
  reducer,
  initialState,
  middleware
);
