import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import TripDetails from './TripDetails';
import UpdateTripForm from './UpdateTripForm';
import NewTripForm from './NewTripForm';
import DeleteTrip from './DeleteTrip';


import Months from './Months'



const AppRouter = () => {
  return (
    <div>
      <Router history={browserHistory} >
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/trips" component={Dashboard}/>
        <Route path="/trips/new" component={NewTripForm}/>
        <Route path="/trips/:id" component={TripDetails}/>
        <Route path="/trips/:id/update" component={UpdateTripForm}/>
        <Route path="/trips/:id/delete" component={DeleteTrip}/>

        <Route path="/trips/reports/bymonths" component={Months}/>

      </Router>
    </div>
  );
}

export default AppRouter;
