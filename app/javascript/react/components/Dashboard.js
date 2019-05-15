import React, { Component } from 'react';
import NewTripForm from './NewTripForm';
import ReactTable from 'react-table'


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
   if (this.state.formToggle === "hidden") {
     this.setState({
       formToggle: "show"
     })
   } else {
     this.setState({
       formToggle: "hidden"
     })
   }
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
  let trips = this.state.trips.forEach((trip) => {
      miles += trip.miles
      earning += trip.net_earning
  })

  const columns = [{
   Header: 'Date',
   accessor: 'created_at'
  },
  {
   Header: 'Time',
   accessor: 'created_at'
  },
  {
   Header: 'Earnings',
   accessor: 'net_earning',
  },
  {
   Header: 'Miles',
   accessor: 'miles'
  }]


  let taxRate = 0.22;
  let mileageRate = 0.58;
  let estimatedTaxableEarning = earning-(miles*mileageRate);
  let estimatedTaxableOwed = estimatedTaxableEarning * taxRate;

    return(
      <div>
      <div className="grid-container">
        <div className="grid-logo">
        <h2>Welcome {this.state.user}</h2>
        </div>
        <div className="grid-table-show-page"></div>
      </div>

      <div className="grid-container">
        <div className="grid-logo">
          <div>
            <h5>Estimated Taxes Owed: &nbsp;&nbsp;&nbsp; ${`${estimatedTaxableOwed.toFixed(2)}`} </h5>
            <h5>Estimated Earnings: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${`${earning.toFixed(2)}`}</h5>
            <h5>Estimated Miles Driven: &nbsp;&nbsp;&nbsp;&nbsp;{`${miles}`} miles</h5>
          </div>
        </div>

        <div className="grid-table-show-page">
           <h4>Trip History</h4>
          <div>
          <ReactTable
            columns={columns}
            data={this.state.trips}
            defaultPageSize={6}
          />
          </div>
          <div onClick={this.handleClick}>
            <a><p>Add New Trip</p></a>
          </div>
          <div className={`${this.state.formToggle}`}>
            <NewTripForm
             addNewTrip={this.addNewTrip}
            />
         </div>
        </div>
      </div>
      </div>
    )
  }
}
