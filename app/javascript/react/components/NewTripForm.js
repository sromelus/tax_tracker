import React from 'react';
import { Link } from 'react-router';
import ProfileInfoDetailsandForm from '../screens/ProfileInfoDetailsandForm'
import Footer from '../screens/Footer'

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: ''
      },
      trip: {
        miles: '',
        gross_income: '',
        maintenance: '',
        gas: '',
        insurance: '',
        food: ''
      },
      message: '',
      errors: ''
    }
  }


  componentDidMount(){
    const id = this.props.params.id;

    fetch(`/api/v1/trips`)
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
        }
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
      maintenance: parseFloat(this.state.trip.maintenance),
      gas: parseFloat(this.state.trip.gas),
      insurance: parseFloat(this.state.trip.insurance),
      food: parseFloat(this.state.trip.food)
    }

    console.log(trip);

    fetch(`/api/v1/trips`, {
       method: 'POST',
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

        <ProfileInfoDetailsandForm
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
        />
        <div className="container-aside-one">
          <div className="container-trips">
            <div className="trips-details-header">
              <p id="trips_title">New Trip Data</p>
            </div>
            <div className="trips-details-content">
              <div className="trips-form-card">
                <form onSubmit={this.handleSubmit}>
                  <div className="label-input">
                    <div className="labels">
                      <label className="label-form" htmlFor="miles">Miles:</label>
                      <label className="label-form" htmlFor="grossincome">Gross Income:</label>
                      <label className="label-form" htmlFor="maintenance">Maintenance:</label>
                      <label className="label-form" htmlFor="gas">Gas:</label>
                      <label className="label-form" htmlFor="food">Food:</label>
                      <label className="label-form" htmlFor="insurance" title="daily average insurance cost">Insurance: (!) </label>
                    </div>
                    <div className="">
                      <input className="input-form" type="text" maxLength="5" id="miles" name="miles" onChange={this.handleChange} value={this.state.trip.miles}/>
                      <input className="input-form" type="text" maxLength="5" id="gross_income" name="gross_income" onChange={this.handleChange} value={this.state.trip.gross_income}/>
                      <input className="input-form" type="text" maxLength="5" id="maintenance" name="maintenance" onChange={this.handleChange} value={this.state.trip.maintenance}/>
                      <input className="input-form" type="text" maxLength="5" id="gas" name="gas" onChange={this.handleChange}
                      value={this.state.trip.gas}/>
                      <input className="input-form" type="text" maxLength="5" id="food" name="food" onChange={this.handleChange}
                      value={this.state.trip.food}/>
                      <input className="input-form" type="text" maxLength="5" id="insurance" name="insurance" placeholder="Enter daily average insurance cost" onChange={this.handleChange} value={this.state.trip.insurance}/>
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
    )
  }
}

export default NewTripForm;
