import React, { Component } from 'react';
import NewTripForm from './NewTripForm';
import ReactTable from 'react-table';
import { Link } from 'react-router';


export default class Dashboard extends Component {
 constructor(props){
   super(props);
   this.state = {
     user: '',
     trips: [],
     formToggle: "hidden",
     reportsToggle: "hidden",
     toggle: "▼"
   }
   this.addNewTrip = this.addNewTrip.bind(this)
   this.handleShowForm = this.handleShowForm.bind(this)
   this.handleShowReport = this.handleShowReport.bind(this)
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

 handleShowForm(){
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

 handleShowReport(){
   if (this.state.reportsToggle === "hidden") {
     this.setState({
       reportsToggle: "show",
       toggle: "▲"
     })
   } else {
     this.setState({
       reportsToggle: "hidden",
       toggle: "▼"
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
   accessor: 'date',
   defaultSortDesc: true
  },
  {
   Header: 'Time',
   accessor: 'time',
   sortable: false
  },
  {
   Header: 'Earnings',
   accessor: 'net_earning',
   sortable: false
  },
  {
   Header: 'Miles',
   accessor: 'miles',
   sortable: false
  }]


  let taxRate = 0.22;
  let mileageRate = 0.58;
  let estimatedTaxableEarning = earning-(miles*mileageRate);
  let estimatedTaxableOwed = estimatedTaxableEarning * taxRate;

    return(
      <div>
        <div className="grid-container-dashboard">

          <div className="grid-item-dashboard">
            <h2>Welcome {this.state.user}</h2><br/><br/>
            <div>
              <h5>Estimated Taxes Owed: &nbsp;&nbsp;&nbsp; ${`${estimatedTaxableOwed.toFixed(2)}`} </h5>
              <h5>Estimated Earnings: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${`${earning.toFixed(2)}`}</h5>
              <h5>Estimated Miles Driven: &nbsp;&nbsp;&nbsp;&nbsp;{`${miles}`} miles</h5><br/><br/><br/>
              <div onClick={this.handleShowReport} ><a><h5>Reports {this.state.toggle}</h5></a>
              </div>
              <div className={`${this.state.reportsToggle}`}>
                <h5><Link to='/trips/reports/byweeks'>Weeks</Link></h5>
                <h5><Link to='/trips/reports/bymonths'>Months</Link></h5>
                <h5><Link to='/trips/reports/byyears'>Years</Link></h5>
              </div>
            </div>
          </div>
          <div className="grid-item-dashboard-table">
            <h4>Trip History</h4>

            <ReactTable
                columns={columns}
                data={this.state.trips}
                defaultPageSize={6}
              />

            <div onClick={this.handleShowForm}>
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
