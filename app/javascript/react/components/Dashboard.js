import React, { Component } from 'react'
import TripTile from './TripTile'
import NewTripForm from './NewTripForm'

export default class Dashboard extends Component {
 constructor(props){
   super(props);
   this.state = {
     user: '',
     trips: [],
     formToggle: "hidden"
   }
   this.addNewTrip = this.addNewTrip.bind(this)
   this.handleClick = this.handleClick.bind(this)
 }

 componentDidMount(){
   fetch("/api/v1/trips")
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
       user: body.current_user.first_name,
       trips: body.trips
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }

 handleClick(){
   this.setState({
     formToggle: "show"
   })
 }

 addNewTrip(tripPayLoad) {
  fetch("/api/v1/trips",{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(tripPayLoad)
    })
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
        user: body.current_user.first_name,
        trips: body.trips
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
 }

 render(){
  let miles = 0;
  let earning = 0;
  let trips = this.state.trips.map((trip) => {
      miles += trip.miles
      earning += trip.net_earning

    return(
      <TripTile
        key={trip.id}
        miles={trip.miles}
        netEarning={trip.net_earning}
        date={trip.created_at}
      />
    )
  })

  let taxRate = 0.22;
  let mileageRate = 0.58;
  let estimatedTaxableEarning = earning-(miles*mileageRate);
  let estimatedTaxableOwed = estimatedTaxableEarning * taxRate;

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h3>Welcome {this.state.user}</h3>
          <div>
            <p>Estimated Taxes Owed: ${`${estimatedTaxableOwed.toFixed(2)}`} </p>
            <p>Estimated Earnings: ${`${earning.toFixed(2)}`}</p>
            <p>Estimated Miles Driven: {`${miles}`} miles</p>
          </div>

          <div onClick={this.handleClick}>
             Add New Trip
          </div>
          <div>
            {trips}
          </div>
          <div className={`${this.state.formToggle}`}>
            <NewTripForm addNewTrip={this.addNewTrip}/>
          </div>
        </div>
      </div>
    )
  }
}
