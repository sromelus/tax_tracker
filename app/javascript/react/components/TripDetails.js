import React, { Component } from 'react';
import { Link } from 'react-router';
import DeleteTrip from './DeleteTrip'
import ProfileInfo from '../screens/ProfileInfo'
import Footer from '../screens/Footer'

export default class TripDetails extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        firstName: "",
        lastName: ""
      },
      imageUrl: '',
      trip: {},
      display: 'hide-delete'
    }
  }

  componentDidMount(){
    const id = this.props.params.id;

    fetch(`/api/v1/trips/${id}`)
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        ...this.state,
        user: {
          firstName: body.current_user.first_name,
          lastName: body.current_user.last_name
        },
        imageUrl: body.image,
        trip: body.trip,
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleShowDelete = () => {
    this.setState({
      ...this.state,
      display: "show-delete"
    })
  }



  render(){
    const id = this.props.params.id;
    return (
      <div className="container-aside-one fade-in">
        <div className="container-trips">
          <div className="trips-details-header">
            <p id="trips_title">Trip Details</p>
          </div>
          <div className="trips-details-content">
          {Object.keys(this.state.trip).length === 0 ?
            (<h3>Loading...</h3>)
            :
            (
              <div className="trips-details-content">
                <div className="trips-details-card">
                  <div className="card-text">
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    {/*<p>Net Income: </p>*/}
                    <p>Maintenance: </p>
                    <p>Gas: </p>
                    <p>Food: </p>
                    <p>Insurance: </p>
                    {/*<p>Taxe Owed: </p>*/}
                  </div>
                  <div className="card-numbers">
                    <p id="trip-miles">{this.state.trip.miles}</p>
                    <p id="trip-grossincome">${this.state.trip.gross_income.toFixed(2)}</p>
                    {/*<p id="trip-netincome">${"n/a"}</p>*/}
                    <p id="trip-maintenance">${this.state.trip.maintenance.toFixed(2)}</p>
                    <p id="trip-gas">${this.state.trip.gas.toFixed(2)}</p>
                    <p id="trip-food">${this.state.trip.food.toFixed(2)}</p>
                    <p id="trip-insurance">${this.state.trip.insurance.toFixed(2)}</p>
                    {/*<p id="trip-taxowed">${"n/a"}</p>*/}
                  </div>
                </div>
                <div className="action-buttons">
                  <Link className="button" to={`/trips/${id}/update`}>Update</Link>
                  <Link className="button button-cancel" onClick={this.handleShowDelete}>Delete</Link>
                  <Link className="button button-cancel" to={`/`}>Cancel</Link>
                </div>
                <DeleteTrip
                  className={this.state.display}
                  id={id}
                  props={this.props}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
