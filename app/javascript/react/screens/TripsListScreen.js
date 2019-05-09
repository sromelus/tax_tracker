import React, { Component } from 'react'
import UserTrip from '../components/UserTrip'

export default class TripsListScreen extends Component {

  renderTripCards = () => {
    return this.props.route.trips.map(trip => {
      return(
        <UserTrip
          key={trip.id}
          miles={trip.miles}
          net_earning={trip.net_earning}
          created_at={trip.created_at}
        />
      )
    })
  }

  render () {
    return (
      <div className='app-screen trips-list'>
        {this.renderTripCards()}
      </div>
    )
  }
}
