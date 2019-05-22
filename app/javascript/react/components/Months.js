import React from 'react';
import MonthTile from '../screens/MonthTile'


class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      trips: [],
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

      debugger
      return(
        <MonthTile
        key={trip.id}
        miles={trip.miles}
        />
      )
    })


    // let taxRate = 0.22;
    // let mileageRate = 0.58;
    // let estimatedTaxableEarning = earning-(miles*mileageRate);
    // let estimatedTaxableOwed = estimatedTaxableEarning * taxRate;

    return(
      <div>
        {trips}
      </div>
    )
  }
}

export default Months;
