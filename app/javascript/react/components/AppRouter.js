import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import NewTripForm from './NewTripForm';
import Dashboard from './Dashboard';

import Months from './Months'



const AppRouter = () => {
  return (
    <div>
      <Router history={browserHistory} >
        <Route path="/" component={Dashboard}/>
        <Route path="/trips" component={Dashboard}/>

        <Route path="/trips/reports/bymonths" component={Months}/>

      </Router>
    </div>
  );
}

export default AppRouter;
