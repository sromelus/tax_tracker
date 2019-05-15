import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import NewTripForm from './NewTripForm';
import Dashboard from './Dashboard';

const AppRouter = () => {
  return (
    <div>
      <Router history={browserHistory} >
        <Route path="/" component={Dashboard}/>
        <Route path="/trips" component={Dashboard}/>
      </Router>
    </div>
  );
}

export default AppRouter;
