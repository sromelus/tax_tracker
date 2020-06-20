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
     user: {
       firstName: "",
       lastName: ""
     },
     trips: [],
     converTrips: [],
     tripsList: [],
     firstRender: true,
     mounted: false,
     pageNumbers: [],
   }
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
     const trips = this.createTwoDimensional(body.trips, 12);
     this.setState({
       ...this.state,
       user: {
         firstName: body.current_user.first_name,
         lastName: body.current_user.last_name
       },
       trips: body.trips,
       converTrips: trips,
       mounted: true
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
 }


handleShowTripList = (e, array) => {
  console.log(e.currentTarget);
  let tripsList;
  const mileageRate = 0.58;
  if(array.length > 0){
      tripsList =  array.map((trip) => {
      const expenses = trip.maintenance+trip.gas+trip.insurance+trip.food;
      const netIncome = trip.gross_income - expenses;
      let taxOwed = (netIncome - (trip.miles * mileageRate)) * 0.10;
      if (taxOwed < 0) taxOwed = 0.00;

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
      <div className="card page-number" id={index} key={index} onClick={(e) => this.handleShowTripList(e, trip)}>
        <a href={`#${index}`}>{index+1}</a>
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


displayTripCard = (mounted, arrayToDisplay) => {
  if (mounted){
    if(arrayToDisplay.length > 0){
      return arrayToDisplay;
    } else {
      return <h3>Please click the add new trip button to start tracking your taxes.</h3>;
    }
  } else {
    return <h3>Loading...</h3>;
  }
}

calculateTaxes = (taxableIncome) => {
  let taxOwed;

  if (taxableIncome <= 0) {

    return taxOwed = 0;

  } else if(taxableIncome <= 9875){

    return taxOwed = taxableIncome*0.10;

  } else if (taxableIncome>=9876 && taxableIncome<=40125) {

    const excessOver = taxableIncome-9875;
    return taxOwed = 9875*0.10+excessOver*0.12;

  } else if (taxableIncome>=40126 && taxableIncome<=85525) {

    const excessOver = taxableIncome-9875-40126;
    return taxOwed = 9875*0.10 +40126*0.12+excessOver*0.22;

  } else if (taxableIncome>=85526 && taxableIncome<=163300) {

    const excessOver = taxableIncome-9875-40126-85526;
    return taxOwed = 9875*0.10+40126*0.12+85526*0.22+excessOver*0.24;

  } else if (taxableIncome>=163301 && taxableIncome<=207350) {

    const excessOver = taxableIncome-9875-40126-85526-163301;
    return taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+excessOver*0.32;

  } else if (taxableIncome>=207351 && taxableIncome<=311025) {

    const excessOver = taxableIncome-9875-40126-85526-163301-207351;
    return taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+207351*0.32+excessOver*0.35;

  } else if (taxableIncome>=311026) {

    const excessOver = taxableIncome-9875-40126-85526-163301-207351-311026;
    return taxOwed = 9875*0.10+40126*0.12+85526*0.22+163301*0.24+207351*0.32+311026*0.35+excessOver*0.37;
  }
}



 render(){

   if(this.state.trips.length > 0 && this.state.firstRender){
     const tripFirstPage = this.state.converTrips[0];
     this.handleShowTripList("", tripFirstPage);
     this.handleShowPages();
   }

   let miles = 0;
   let grossIncome = 0;
   let maintenance = 0;
   let gas = 0;
   let insurance = 0;
   let food = 0;
   let taxableIncome = 0;
   const mileageRate = 0.58;

   this.state.trips.forEach((trip) => {
       miles += trip.miles
       grossIncome += trip.gross_income
       maintenance += trip.maintenance
       gas += trip.gas
       food += trip.food
       insurance += trip.insurance
   })

   const mileageDeduction = miles * mileageRate;
   const expenses = maintenance + gas + insurance + food;
   let netIncome = grossIncome - expenses;

   taxableIncome = netIncome - mileageDeduction;

   const taxOwed = this.calculateTaxes(taxableIncome);

   let classColor = "";
   if(netIncome < 0){
     classColor = "negative_net_income";
     netIncome = `(${(netIncome*-1).toFixed(2)})`;
   } else if (netIncome > 0) {
     netIncome = `(${(netIncome).toFixed(2)})`
     classColor = "positive_net_income";
   }


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
            {this.displayTripCard(this.state.mounted, this.state.tripsList)}
            </div>
            <div className="trips-page-number">
              {this.state.pageNumbers}
            </div>
          </div>
        </div>
        <Footer />

      </div>
    )
  }
}
