import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  let classColor = "";
  let netIncome = props.netIncome;
  if(netIncome < 0){
    classColor = "negative_net_income";
    netIncome = `(${(netIncome*-1).toFixed(2)})`
  } else if (netIncome > 0) {
    netIncome = `(${(netIncome).toFixed(2)})`
    classColor = "positive_net_income";
  }

  return (
    <Link to={`trips/${props.id}`}>
      <div className="card">
        <div className="card-text">
          <p>&nbsp;</p>
          <p>Miles: </p>
          <p>Gross Income: </p>
          <p>Est. Net Income: </p>
          <p>Expenses: </p>
          <p>Est. Tax Owed: </p>
        </div>
        <div className="card-numbers">
          <p><time id="date">{props.date}</time></p>
          <p id="trip-miles">{props.miles}</p>
          <p id="trip-gross-income">${props.grossIncome.toFixed(2)}</p>
          <p id="trip-net-income" className={classColor}>${netIncome}</p>
          <p id="trip-expenses" >${props.expenses.toFixed(2)}</p>
          <p id="trip-tax-owed">${props.taxOwed.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
