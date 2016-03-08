import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/movielist" component={MovieList} />
      <Route path="/movie/:movieId" component={Movie}/>
    </Route>
  </Router>
), document.getElementById('root'));
