import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import Dashboard from './Dashboard';
import TripDetails from './TripDetails';
import UpdateTripForm from './UpdateTripForm';
import NewTripForm from './NewTripForm';
import ProfileInfo from '../screens/ProfileInfo'
import Footer from '../screens/Footer';

import Months from './Months'



const AppRouter = () => {
  return (
    <div>
        <div className="hero">
          <div className="container-login-user">
            <ProfileInfo />
          </div>
          <Router history={browserHistory}>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/trips" component={Dashboard}/>
            <Route path="/trips/new" component={NewTripForm}/>
            <Route path="/trips/:id" component={TripDetails}/>
            <Route path="/trips/:id/update" component={UpdateTripForm}/>
          </Router>
          <Footer />
        </div>
    </div>
  );
}

export default AppRouter;
