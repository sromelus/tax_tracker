import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileInfoDetailsandFrom from '../screens/ProfileInfoDetailsandFrom'
import Footer from '../screens/Footer'

export default class TripDetails extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    return (
      <div className="hero">

        <ProfileInfoDetailsandFrom />

        <div className="container-aside-one">
          <div className="container-trips">
            <div className="trips-details-header">
              <p id="trips_title">Trip Details</p>
            </div>
            <div className="trips-details-content">
              <div className="trips-details-card">
                <div className="card-text">
                  <p>Miles: </p>
                  <p>Gross Income: </p>
                  <p>Net Income: </p>
                  <p>Maintenance: </p>
                  <p>Gas: </p>
                  <p>Food: </p>
                  <p>Insurance: </p>
                  <p>Taxe Owed: </p>
                </div>
                <div className="card-numbers">
                  <p id="trip-miles">0</p>
                  <p id="trip-grossincome">$0.00</p>
                  <p id="trip-netincome">$0.00</p>
                  <p id="trip-maintenance">$0.00</p>
                  <p id="trip-gas">$0.00</p>
                  <p id="trip-food">$0.00</p>
                  <p id="trip-insurance">$0.00</p>
                  <p id="trip-taxowed">$0.00</p>
                </div>
              </div>
              <div className="action-buttons">
                <Link className="button" to={`trips/${1}/update`}>Update</Link>
                <Link className="button button-cancel" to={`/`}>Cancel</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
