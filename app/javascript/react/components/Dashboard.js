import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileInfo from '../screens/ProfileInfo'
import Footer from '../screens/Footer'
import NewTripForm from './NewTripForm';


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
   // this.addNewTrip = this.addNewTrip.bind(this)
   // this.handleShowForm = this.handleShowForm.bind(this)
   // this.handleShowReport = this.handleShowReport.bind(this)
 }

 componentDidMount(){
   console.log("mounted");
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
       user: {
         firstName: body.current_user.first_name,
         lastName: body.current_user.last_name
       },
       trips: body.trips
     })
     console.log(body);
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }

 // handleShowForm(){
 //   if (this.state.formToggle === "hidden") {
 //     this.setState({
 //       formToggle: "show"
 //
 //     })
 //   } else {
 //     this.setState({
 //       formToggle: "hidden"
 //     })
 //   }
 // }

 // handleShowReport(){
 //   if (this.state.reportsToggle === "hidden") {
 //     this.setState({
 //       reportsToggle: "show",
 //       toggle: "▲"
 //     })
 //   } else {
 //     this.setState({
 //       reportsToggle: "hidden",
 //       toggle: "▼"
 //     })
 //   }
 // }


 // addNewTrip(tripPayLoad) {
 //  fetch("/api/v1/trips",{
 //    method: 'POST',
 //    headers: {
 //        'Accept': 'application/json',
 //        'Content-Type': 'application/json'
 //      },
 //    body: JSON.stringify(tripPayLoad)
 //    })
 //    .then(response => {
 //      if (response.ok) {
 //        return response;
 //      } else {
 //        let errorMessage = `${response.status}(${response.statusText})` ,
 //        error = new Error(errorMessage);
 //        throw(error);
 //      }
 //    })
 //    .then(response => response.json())
 //    .then(body => {
 //      this.setState({
 //        user: body.current_user,
 //        trips: body.trips
 //      })
 //    })
 //    .catch(error => console.error(`Error in fetch: ${error.message}`));
 // }

 render(){

  // let miles = 0;
  // let earning = 0;
  // let trips = this.state.trips.forEach((trip) => {
  //     miles += trip.miles
  //     earning += trip.net_earning
  // })
  //
  // const columns = [{
  //  Header: 'Date',
  //  accessor: 'date',
  //  defaultSortDesc: true
  // },
  // {
  //  Header: 'Time',
  //  accessor: 'time',
  //  sortable: false
  // },
  // {
  //  Header: 'Earnings',
  //  accessor: 'net_earning',
  //  sortable: false
  // },
  // {
  //  Header: 'Miles',
  //  accessor: 'miles',
  //  sortable: false
  // }]
  //
  //
  // let taxRate = 0.22;
  // let mileageRate = 0.58;
  // let estimatedTaxableEarning = earning-(miles*mileageRate);
  // let estimatedTaxableOwed = estimatedTaxableEarning * taxRate;

    return (
      <div className="hero">

        <ProfileInfo
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
        />

        <div className="container-aside">
          <div className="container-stats">
            <div className="card">
              <div className="card-text">
                <p>Miles: </p>
                <p>Gross Income: </p>
                <p>Net Income: </p>
              </div>
              <div className="card-numbers">
                <p id="trips-miles">0</p>
                <p id="trips-gross-income">$0.00</p>
                <p id="trips-net-income">$0.00</p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <p>Total Expenses: </p>
              </div>
              <div className="card-numbers">
                <p id="trips-expenses">$0.00</p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <p>Total Taxes Owed: </p>
              </div>
              <div className="card-numbers">
                <p id="trips-tax-owed">$0.00</p>
              </div>
            </div>
          </div>
          <div className="container-trips">
            <div className="trips-details-header">
              <p id="trips_title">Trips History</p>
              <Link to={`trips/new`}>
                <div className="card add-card">
                  <p> + </p>
                  <p className="add-trip-anchor">Add new trip</p>
                </div>
              </Link>
            </div>
            <div className="trips-card-content">
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
              <Link to={`trips/${1}`}>
                <div className="card">
                  <div className="card-text">
                    <p>&nbsp;</p>
                    <p>Miles: </p>
                    <p>Gross Income: </p>
                    <p>Net Income: </p>
                    <p>Expenses: </p>
                    <p>Tax Owed: </p>
                  </div>
                  <div className="card-numbers">
                    <p><time id="date">01-01-2020</time></p>
                    <p id="trip-miles">0</p>
                    <p id="trip-gross-income">$0.00</p>
                    <p id="trip-net-income">$0.00</p>
                    <p id="trip-expenses">$0.00</p>
                    <p id="trip-tax-owed">$0.00</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="trips-page-number">
              <div className="card page-number">
                <a className="" href="./new_trip.html" >1</a>
              </div>
              <div className="card page-number">
                <a className="" href="./new_trip.html" >1</a>
              </div>
              <div className="card page-number">
                <a className="" href="./new_trip.html" >1</a>
              </div>
              <div className="card page-number">
                <a className="" href="./new_trip.html" >1</a>
              </div>
              <div className="card page-number">
                <a className="" href="./new_trip.html" >1</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    )
  }
}
