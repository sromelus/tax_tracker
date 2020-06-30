import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileInfo from '../screens/ProfileInfo'
import Footer from '../screens/Footer'

export default class UpdateTripForm extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: ''
      },
      imageUrl: '',
      trip: {
        miles: 'Loading...',
        gross_income: 'Loading...',
        maintenance: 'Loading...',
        gas: 'Loading...',
        insurance: 'Loading...',
        food: 'Loading...'
      },
      message: '',
      errors: []
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
        trip: body.trip
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  handleChange = (e) => {
    this.setState({
      trip: {
        ...this.state.trip,
        [e.target.name]: e.target.value
      }
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const trip = {
      miles: parseInt(this.state.trip.miles),
      gross_income: parseFloat(this.state.trip.gross_income),
      maintenance: parseFloat(this.state.trip.maintenance || 0),
      gas: parseFloat(this.state.trip.gas || 0),
      insurance: parseFloat(this.state.trip.insurance || 0),
      food: parseFloat(this.state.trip.food || 0)
    }

    console.log(trip);

    const id = this.props.params.id;

    console.log(id);

    fetch(`/api/v1/trips/${id}`, {
       method: 'PUT',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
       body: JSON.stringify({trip})
       })
       .then(response => {
         if (response.ok) {
           this.props.router.push('/');
           return response;
         } else if (response.status === 400) {
           return response;
         } else {
           let errorMessage = `${response.status}(${response.statusText})`;
           error = new Error(errorMessage);
           throw(error);
         }
       })
       .then(response => response.json())
       .then(body => {
         this.setState({
           ...this.state,
           message: body.message,
           errors: body.errors
         })
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render(){

    return (
      <div className="hero">

        <div className="container-details-form">
          <ProfileInfo
            imageUrl={this.state.imageUrl}
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
          />
        </div>
        <div className="container-aside-one">
          <div className="container-trips">
            <div className="trips-details-header">
              <p id="trips_title">Update Trip Data</p>
            </div>
            <div className="trips-details-content">
              <div style={{color: "red"}}>
               {this.state.errors.map((error) => {
                 return(
                   <li>{error.replace("is not", "must be")}</li>
                 )
               })}
              </div>
              <div className="trips-form-card">
                <form onSubmit={this.handleSubmit}>
                  <div className="label-input">
                    <div className="labels">
                      <label className="label-form" htmlFor="miles">Miles:</label>
                      <label className="label-form" htmlFor="gross_income">Gross Income:</label>
                      <label className="label-form" htmlFor="maintenance">Maintenance:</label>
                      <label className="label-form" htmlFor="gas">Gas:</label>
                      <label className="label-form" htmlFor="food">Food:</label>
                      <label className="label-form" htmlFor="insurance">Insurance:</label>
                    </div>
                    <div className="">
                      <input className="input-form" type="text" maxLength="5" id="miles" name="miles" onChange={this.handleChange} value={this.state.trip.miles}/>
                      <input className="input-form" type="text" maxLength="5" id="gross_income" name="gross_income" onChange={this.handleChange} value={this.state.trip.gross_income}/>
                      <input className="input-form" type="text" maxLength="5" id="maintenance" name="maintenance" onChange={this.handleChange} value={this.state.trip.maintenance}/>
                      <input className="input-form" type="text" maxLength="5" id="gas" name="gas" onChange={this.handleChange}
                      value={this.state.trip.gas}/>
                      <input className="input-form" type="text" maxLength="5" id="food" name="food" onChange={this.handleChange}
                      value={this.state.trip.food}/>
                      <input className="input-form" type="text" maxLength="5" id="insurance" name="insurance" onChange={this.handleChange} value={this.state.trip.insurance}/>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <input className="button" type="submit" value="Submit" />
                    <Link className="button button-cancel" to={`/`}>Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
