import React from 'react'

const TripTile = (props) => {
  return(
    <div>
      <div className="row">
        <div className="small-8 small-centered columns">
             <p>trip: Miles: {props.miles} | Earning: ${props.netEarning} | Date: {props.date} </p>
          </div>
      </div>
    </div>
  )
}

export default TripTile;
