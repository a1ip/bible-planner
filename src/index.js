import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router'

import App from './App';
import Book from './Book';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='book' component={Book} />
    </Route>
  </Router>
), document.getElementById('root'));
