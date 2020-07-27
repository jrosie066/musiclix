import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import SearchResults from './SearchResults';

export const createRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Home} />
    {
      [
        {
          component: Home,
          path: '/',
        },
        {
          component: SearchResults,
          path: '/searchresults',
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
