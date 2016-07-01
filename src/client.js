import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/AppContainer';
import HomePage from './containers/HomeContainer';
import SearchPage from './containers/SearchContainer';
import StationPage from './containers/StationDetailsContainer';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/search/:query" component={SearchPage} />
      <Route path="/station/:id/:slug" component={StationPage} />
    </Route>
  </Router>
  , document.getElementById('app'));
