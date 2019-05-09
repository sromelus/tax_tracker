import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

// helpers
import { PropsRoute } from './helpers/PropsRoute'

//components
import Header from './components/header'

// screens
import NewTripScreen from './screens/NewTripScreen'
import TripsListScreen from './screens/TripsListScreen'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trips: [],
      loading: true
    }
  }

  patchTrip = (tripId, patch) => {
    // OPTIMISTIC UPDATES - PATCH

    let oldState = this.state.trips

    let copy = [...this.state.trips]
    let tripIdx = this.state.trips.findIndex(trip => trip.id === tripId)

    copy[tripIdx] = {
      ...copy[tripIdx],
      ...patch
    }

    this.setState({
      trips: copy
    })

    // if the network call goes fine, do nothing
    //...
    // if the network call is an error, setState back to the oldState above we saved.
  }

  componentDidMount () {
    fetch("/api/v1/trips")
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})` ,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentUser: body.current_user,
        trips: body.trips,
        loading: false
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewTrip = (formpayload) => {
    return new Promise((resolve, reject) => {
      debugger
      // do fetch here......
      // this is fake.....
      setTimeout(() => {
        resolve({
          miles: 38383,
          netEarnings: 38382
        })
        // if the status code was bad...
        reject(false)
      }, 2000)
    })
  }

  renderLoading = () => {
    return <div>Loading...</div>
  }

  render () {
    if (this.state.loading) {
      return this.renderLoading()
    }

    return (
      <div className='main-container'>
        <Header/>
        <Router history={browserHistory} >
          <PropsRoute path="/" component={TripsListScreen} trips={this.state.trips} />
          <PropsRoute path="/trips/new" component={NewTripScreen} addNewTrip={this.addNewTrip} />
        </Router>
      </div>
    )
  }
}
