import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from './App';
import Book from './Book';

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
      <Route path='book' component={Book} />
    </Route>
  </Router>
), document.getElementById('root'));
