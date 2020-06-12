import React from 'react';

export default (props) => {
    return (
      <div className="card page-number">
        <a className="" href="./new_trip.html" >{props.index+1}</a>
      </div>
    );
}
