import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileInfoDetailsandFrom from '../screens/ProfileInfoDetailsandFrom'
import Footer from '../screens/Footer'

export default class UpdateTripForm extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    return (
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
    );
  }
}
