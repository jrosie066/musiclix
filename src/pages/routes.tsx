import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import SearchResults from './SearchResults';
import { SEARCH_RESULTS_PATH, DEFAULT_PATH } from '../constants/route-paths';

export const createRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={DEFAULT_PATH} component={Home} />
    {
      [
        {
          component: Home,
          path: DEFAULT_PATH,
        },
        {
          component: SearchResults,
          path: SEARCH_RESULTS_PATH,
        }
      ].map((settings, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route exact key={`Route-${index}`} {...settings} />
      ))
    }
    {/* TODO: change to Error route */}
    <Redirect from="*" to="/" />
  </Switch>
);
