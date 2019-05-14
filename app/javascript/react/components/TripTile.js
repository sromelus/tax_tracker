import React from 'react'

const TripTile = (props) => {

  let date = new Date(`${props.date}`);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let time = date.toLocaleTimeString();

  return(
    <div>

      <div>
        <div>
          <p>trip: Miles: {props.miles} | Earning: ${props.netEarning} | Date: {`${month+1}-${day}-${year}`} | Time: {time}</p>
        </div>
      </div>
    </div>
  )
}

export default TripTile;
