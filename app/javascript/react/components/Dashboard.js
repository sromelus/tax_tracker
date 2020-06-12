import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileInfo from '../screens/ProfileInfo'
import NewTripForm from './NewTripForm';
import Footer from '../screens/Footer';
import Card from '../screens/Card';
import PageNumbers from '../screens/PageNumbers';



export default class Dashboard extends Component {
 constructor(props){
   super(props);
   this.state = {
     user: '',
     trips: [],
     converTrips: [],
     tripsList: [],
     firstRender: true,
     pageNumbers: [],
     formToggle: "hidden",
     reportsToggle: "hidden",
     toggle: "▼"
   }
   // this.addNewTrip = this.addNewTrip.bind(this)
   // this.handleShowForm = this.handleShowForm.bind(this)
   // this.handleShowReport = this.handleShowReport.bind(this)
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
     const trips = this.createTwoDimensional(body.trips, 1);
     this.setState({
       user: {
         firstName: body.current_user.first_name,
         lastName: body.current_user.last_name
       },
       trips: body.trips,
       converTrips: trips
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }


handleShowTripList = (array) => {
  let tripsList;
  if(array.length > 0){
      tripsList =  array.map((trip) => {
      const expenses = trip.maintenance+trip.gas+trip.insurance+trip.food;
      const netIncome = trip.gross_income - expenses;
      let taxOwed = netIncome * 0.10;
      if (netIncome * 0.10 < 0) taxOwed = 0.00;

      return (
        <Card
          key={trip.id}
          id={trip.id}
          date={trip.date}
          miles={trip.miles}
          grossIncome={trip.gross_income}
          netIncome={netIncome}
          expenses={trip.maintenance+trip.gas+trip.insurance+trip.food}
          taxOwed={taxOwed}
        />
      )
    })
  }
  this.setState({
     tripsList: tripsList,
     firstRender: false
  })
}

handleShowPages = () => {
  const pageNumbers = this.state.converTrips.map((trip, index) => {
    return (
      <div className="card page-number" key={index} onClick={() => this.handleShowTripList(trip)}>
        <a className="" >{index+1}</a>
      </div>
    )
  })
  this.setState({
     pageNumbers: pageNumbers
  })
}


createTwoDimensional = ((arr, size) => {
   let resultList = [];
   for(let i=0; i < arr.length; i = i+size) resultList.push(arr.slice(i,i+size));
   return resultList;
 })


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
   // if((this.state.trips > 0 && this.state.firstRender){
   //   const tripFirstPage = this.state.converTrips[0];
   //   this.handleShowTripList(tripFirstPage);
   //   console.log(tripFirstPage);
   // }

   // if(this.state.trips.length > 0) {
   //   this.handleShowPages();
   // }

   let miles = 0;
   let grossIncome = 0;
   let maintenance = 0;
   let gas = 0;
   let insurance = 0;
   let food = 0;
   let taxOwed = 0;
   const mileageRate = 0.58;

   this.state.trips.forEach((trip) => {
       miles += trip.miles
       grossIncome += trip.gross_income
       maintenance += trip.maintenance
       gas += trip.gas
       food += trip.food
       insurance += trip.insurance
   })

   const mileageDeduction = miles * 0.58
   const expenses = maintenance + gas + insurance + food;
   let netIncome = grossIncome - expenses - mileageDeduction;

   if (netIncome <= 0) {

     taxOwed = 0;

   } else if(netIncome <= 9875){

     taxOwed = netIncome*0.10;

   } else if (netIncome>=9876 && netIncome<=40125) {

     const excessOver = netIncome-9875;
     taxOwed = 9875*0.10+excessOver*0.12;

   } else if (netIncome>=40126 && netIncome<=85525) {

     const excessOver = netIncome-9875-40126;
     taxOwed = 9875*0.10 +40126*0.12+excessOver*0.22;

   } else if (netIncome>=85526 && netIncome<=163300) {

     const excessOver = netIncome-9875-40126-85526;
     taxOwed = 9875*0.10+40126*0.12+85526*0.22+excessOver*0.24;

   } else if (netIncome>=163301 && netIncome<=207350) {

     const excessOver = netIncome-9875-40126-85526-163301;
     taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+excessOver*0.32;

   } else if (netIncome>=207351 && netIncome<=311025) {

     const excessOver = netIncome-9875-40126-85526-163301-207351;
     taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+207351*0.32+excessOver*0.35;

   } else if (netIncome>=311026) {

     const excessOver = netIncome-9875-40126-85526-163301-207351-311026;
     taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+207351*0.32+311026*0.35+excessOver*0.37;
   }

   let classColor = "";
   if(netIncome < 0){
     classColor = "negative_net_income";
     netIncome = `(${(netIncome*-1).toFixed(2)})`;
   } else if (netIncome > 0) {
     classColor = "positive_net_income";
   }







   //tax data source - https://www.nerdwallet.com/blog/taxes/federal-income-tax-brackets/
   // https://www.vox.com/policy-and-politics/2019/1/7/18171975/tax-bracket-marginal-cartoon-ocasio-cortez-70-percent
   // https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2020
   // https://www.irs.gov/pub/irs-drop/rp-19-44.pdf

  // const tripsList =  this.state.trips.map((trip) => {
  //     <Card
  //       key={}
  //       miles={}
  //       gross_
  //     />
  // })


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
                <p id="trips-miles">{miles}</p>
                <p id="trips-gross-income">${grossIncome.toFixed(2)}</p>
                <p id="trips-net-income" className={classColor}>${netIncome}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <p>Total Expenses: </p>
              </div>
              <div className="card-numbers">
                <p id="trips-expenses">${expenses.toFixed(2)}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <p>Total Taxes Owed: </p>
              </div>
              <div className="card-numbers">
                <p id="trips-tax-owed">${taxOwed.toFixed(2)}</p>
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
              {this.state.tripsList}
              {/*<Link to={`trips/${1}`}>
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
              </Link>*/}
            </div>
            <div className="trips-page-number">
              {this.state.pageNumbers}
              {/*<div className="card page-number">
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
              </div>*/}
            </div>
          </div>
        </div>
        <Footer />

      </div>
    )
  }
}
