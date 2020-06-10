// <div>
//
//   <div className="grid-container-dashboard">
//
//     <div className="grid-item-dashboard">
//       <h2>Welcome {this.state.user}</h2><br/><br/>
//       <div>
//         <h5>Estimated Taxes Owed: &nbsp;&nbsp;&nbsp; ${`${estimatedTaxableOwed.toFixed(2)}`} </h5>
//         <h5>Estimated Earnings: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${`${earning.toFixed(2)}`}</h5>
//         <h5>Estimated Miles Driven: &nbsp;&nbsp;&nbsp;&nbsp;{`${miles}`} miles</h5><br/><br/><br/>
//         <div onClick={this.handleShowReport} ><a><h5>Reports {this.state.toggle}</h5></a>
//         </div>
//         <div className={`${this.state.reportsToggle}`}>
//           <h5><Link to='/trips/reports/byweeks'>Weeks</Link></h5>
//           <h5><Link to='/trips/reports/bymonths'>Months</Link></h5>
//           <h5><Link to='/trips/reports/byyears'>Years</Link></h5>
//         </div>
//       </div>
//     </div>
//     <div className="grid-item-dashboard-table">
//       <h4>Trip History</h4>
//
//       <ReactTable
//           columns={columns}
//           data={this.state.trips}
//           defaultPageSize={6}
//         />
//
//       <div onClick={this.handleShowForm}>
//         <a><p>Add New Trip</p></a>
//       </div>
//       <div className={`${this.state.formToggle}`}>
//         <NewTripForm
//         addNewTrip={this.addNewTrip}
//         />
//       </div>
//
//     </div>
//   </div>
// </div>




// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <link rel="stylesheet" href="triplist.css">
//     <title>Tax Tracker</title>
//   </head>
//   <body>
//     <div class="container">
//       <div class="container-inside">
//         <nav>
//           <img src="Logo.png" alt="">
//           <div class="profile-info">
//             <img class="prof-picture" src="https://via.placeholder.com/150">
//             <div class="profile-name">
//               <h3>Shardly Romelus</h3>
//               <a class="button" href="./index.html">Sign Out</a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//
//     <div class="container-aside">
//       <div class="container-stats">
//         <div class="card">
//           <div class="card-text">
//             <p>Miles: </p>
//             <p>Gross Income: </p>
//             <p>Net Income: </p>
//           </div>
//           <div class="card-numbers">
//             <p id="trips-miles">0</p>
//             <p id="trips-gross-income">$0.00</p>
//             <p id="trips-net-income">$0.00</p>
//           </div>
//         </div>
//         <div class="card">
//           <div class="card-text">
//             <p>Total Expenses: </p>
//           </div>
//           <div class="card-numbers">
//             <p id="trips-expenses">$0.00</p>
//           </div>
//         </div>
//         <div class="card">
//           <div class="card-text">
//             <p>Total Taxes Owed: </p>
//           </div>
//           <div class="card-numbers">
//             <p id="trips-tax-owed">$0.00</p>
//           </div>
//         </div>
//       </div>
//       <div class="container-trips">
//         <div class="trips-details-header">
//           <p id="trips_title">Trips History</p>
//           <div class="card add-card">
//             <p> + </p>
//             <p><a class="add-trip-anchor" href="./new_trip.html" >Add new trip</a></p>
//           </div>
//         </div>
//         <div class="trips-card-content">
//           <div class="card">
//             <div class="card-text">
//               <p>&nbsp;</p>
//               <p>Miles: </p>
//               <p>Gross Income: </p>
//               <p>Net Income: </p>
//               <p>Expenses: </p>
//               <p>Tax Owed: </p>
//             </div>
//             <div class="card-numbers">
//               <p><time id="date">01-01-2020</time></p>
//               <p id="trip-miles">0</p>
//               <p id="trip-gross-income">$0.00</p>
//               <p id="trip-net-income">$0.00</p>
//               <p id="trip-expenses">$0.00</p>
//               <p id="trip-tax-owed">$0.00</p>
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-text">
//               <p>&nbsp;</p>
//               <p>Miles: </p>
//               <p>Gross Income: </p>
//               <p>Net Income: </p>
//               <p>Expenses: </p>
//               <p>Tax Owed: </p>
//             </div>
//             <div class="card-numbers">
//               <p><time id="date">01-01-2020</time></p>
//               <p id="trip-miles">0</p>
//               <p id="trip-gross-income">$0.00</p>
//               <p id="trip-net-income">$0.00</p>
//               <p id="trip-expenses">$0.00</p>
//               <p id="trip-tax-owed">$0.00</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <footer class="footer">
//       <ul>
//         <li><a><strong><%= link_to 'About Us', aboutUs_path %><strong></a></li>
//         <li><a><strong><%= link_to 'Contact', contact_path %><strong></a></li>
//       </ul>
//     </footer>
//   </body>
// </html>
