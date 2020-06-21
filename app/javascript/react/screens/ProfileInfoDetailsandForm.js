// import React from 'react';
// import { Link } from 'react-router';
//
// export default (props) => {
//
//     return (
//         <div className="container-details-form">
//           <div className="container-inside">
//             <nav className="login-user">
//               <Link to={`/`}>
//                 <img src="https://s3.amazonaws.com/tax-tracker-development/Logo.png" title="To home page" alt=""/>
//               </Link>
//               <div className="profile-info">
//                 <img className="prof-picture" src="https://via.placeholder.com/150"/>
//                 <div className="profile-name" id="profile-name">
//                   <h3>{`${props.firstName} ${props.lastName}`}</h3>
//                   <a className="button" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//     );
// }


import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfileInfoDetailsandForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      imageUpload: false,
      show: "none"
    }
  }

  showImageUpload = () => {
    if(!this.state.imageUpload){
       this.setState({
         show: "",
         imageUpload: true
       })
    } else {
       this.setState({
        show: "none",
        imageUpload: false
       })
    }
  }


  render(){
    return (
        <div className="container-details-form">
          <div className="container-inside">
            <nav className="login-user">
              <Link to={`/`}>
                <img src="https://s3.amazonaws.com/tax-tracker-development/Logo.png" title="To home page" alt=""/>
              </Link>
              <div className="profile-info">
                <img className="prof-picture" src="https://via.placeholder.com/150" onClick={this.showImageUpload}/>
                <div className="profile-name" id="profile-name">
                  <h3>{`${this.props.firstName} ${this.props.lastName}`}</h3>
                  <a className="button" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
                </div>
              </div>

              <div className="upload-form" style={{ display: this.state.show }}>
                <p>Click on the "Choose File" button to upload your profile picture.</p>
                <form action="/">
                  <input type="file" id="myFile" name="filename"/>
                  <input type="submit"/>
                </form>
              </div>
            </nav>
          </div>
        </div>
    );
  }
}

export default ProfileInfoDetailsandForm;
