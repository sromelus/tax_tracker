import React from 'react'


const Months = props => {
  return(
    <div>
    <div className="grid-container-reports">
      <div className="grid-item-reports">
        <h2>Welcome Months</h2>
        <p>Miles - {props.miles}</p>
      </div>
    </div>
    </div>
  )
}

export default Months;
