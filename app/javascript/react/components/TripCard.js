import React, { Component } from 'react'

export default class TripCard extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="small-8 small-centered columns">
               <p>trip: Miles: {props.miles} | Net_earning: ${props.net_earning} | Date: {props.created_at} </p>
            </div>
        </div>
      </div>
    )
  }
}
