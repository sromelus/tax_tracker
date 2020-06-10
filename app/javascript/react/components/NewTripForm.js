import React from 'react';
import { Link } from 'react-router';
import ProfileInfoDetailsandFrom from '../screens/ProfileInfoDetailsandFrom'
import Footer from '../screens/Footer'

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miles:'',
      netEarning: ''
    }
    this.handleMilesChange = this.handleMilesChange.bind(this)
    this.handleNetEarningChange = this.handleNetEarningChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMilesChange(event){
    this.setState({miles: event.target.value })
  }

  handleNetEarningChange(event){
    this.setState({netEarning: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    let tripPayLoad = {
      miles: this.state.miles,
      net_earning: this.state.netEarning,
    }

    this.props.addNewTrip(tripPayLoad)
    this.setState({
      miles: '',
      netEarning: '',
    })
  }



  render(){

    return(
      <div className="hero">

        <ProfileInfoDetailsandFrom />
        <div className="container-aside-one">
          <div className="container-trips">
            <div className="trips-details-header">
              <p id="trips_title">New Trip Data</p>
            </div>
            <div className="trips-details-content">
              <div className="trips-form-card">
                <form className="" action="index.html" method="post">
                  <div className="label-input">
                    <div className="labels">
                      <label className="label-form" for="miles">Miles:</label>
                      <label className="label-form" for="grossincome">Gross Income:</label>
                      <label className="label-form" for="maintenance">Maintenance:</label>
                      <label className="label-form" for="gas">Gas:</label>
                      <label className="label-form" for="food">Food:</label>
                      <label className="label-form" for="insurance">Insurance:</label>
                    </div>
                    <div className="">
                      <input className="input-form" type="text" id="miles" name="miles" value=""/>
                      <input className="input-form" type="text" id="grossincome" name="grossincome" value=""/>
                      <input className="input-form" type="text" id="maintenance" name="maintenance" value=""/>
                      <input className="input-form" type="text" id="gas" name="gas" value=""/>
                      <input className="input-form" type="text" id="food" name="food" value=""/>
                      <input className="input-form" type="text" id="insurance" name="insurance" value=""/>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button className="button">Submit</button>
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




{/*
  {"\n"}

  <form onSubmit={this.handleSubmit}>
  <label> Miles:
  <span>
    <input
      type="text"
      name="miles"
      value={this.state.miles}
      onChange={this.handleMilesChange}
    />
  </span>
  </label>
  <label> Net Earning:
    <input
      type="text"
      name="netEarning"
      value={this.state.netEarning}
      onChange={this.handleNetEarningChange}
    />
  </label>
  <input className="button" type="submit" value="Submit" />
</form>*/}
