import React from 'react';
import { Link } from 'react-router';

export default (props) => {

    return (
        <div className="container-details-form">
          <div className="container-inside">
            <nav className="login-user">
              <Link to={`/`}>
                <img src="https://s3.amazonaws.com/tax-tracker-development/Logo.png" title="To home page" alt=""/>
              </Link>
              <div className="profile-info">
                <img className="prof-picture" src="https://via.placeholder.com/150"/>
                <div className="profile-name" id="profile-name">
                  <h3>Shardly Romelus</h3>
                  <a className="button" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
    );
}
