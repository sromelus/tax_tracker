import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './components/app'
import Header from './components/header'
import NewTripForm from './components/NewTripForm'

const AppRouter = (props) => {
  return (
    <div>
    <Header/>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
      <Route path="/trips/new" component={NewTripForm} />
    </Router>
    </div>
  );
}

export default AppRouter;
