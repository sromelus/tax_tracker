import React from 'react';
import { Link } from 'react-router';

const ProfileInfo = (props) => {

    return (
        <div className="container-login-user">
          <div className="container-inside">
            <nav className="login-user">
              <Link to={`/`}>
                <img src="https://s3.amazonaws.com/tax-tracker-development/Logo.png" alt=""/>
              </Link>
              <div className="profile-info">
                <img className="prof-picture" src="https://via.placeholder.com/150"/>
                <div className="profile-name" id="profile-name">
                  <h3>{`${props.firstName} ${props.lastName}`}</h3>
                  <a className="button" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
    );
}

export default ProfileInfo;
