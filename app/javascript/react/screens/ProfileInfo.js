import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfileInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: '',
      imageUploadSetting: false,
      show: "none",
      firstName: '',
      lastName: '',
      imageUrl: '',
      message: '',
      errors: ''
    }
  }

  showImageUpload = () => {
    if(!this.state.imageUploadSetting){
       this.setState({
         show: "",
         imageUploadSetting: true
       })
    } else {
       this.setState({
        show: "none",
        imageUploadSetting: false
       })
    }
  }

  showFile = (e) => {
    let imageFile = e.target.files[0];
    this.setState({
      ...this.state,
      image: imageFile
    })
  }


  handleSubmit = (e) => {
    let imageData = new FormData();
    imageData.append('user_photo', this.state.image)

    fetch(`/api/v1/user_photos`, {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
         },
       body: imageData
       })
       .then(response => {
         console.log(response);
         if (response.ok) {
           return response;
         } else {
           let errorMessage = `${response.status}(${response.statusText})`;
           error = new Error(errorMessage);
           throw(error);
         }
       })
       .then(response => response.json())
       .then(body => {
         this.setState({
           ...this.state,
           imageUrl: body.image,
           message: body.message,
           errors: body.errors
         })
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  componentDidMount(){

    fetch("/api/v1/trips")
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        ...this.state,
        firstName: body.current_user.first_name,
        lastName: body.current_user.last_name,
        imageUrl: body.image
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){

    return (

        <div className="container-inside">
          <nav className="login-user">
            <Link to={`/`}>
              <img src="https://s3.amazonaws.com/tax-tracker-development/Logo.png" title="To home page" alt=""/>
            </Link>
            <div className="profile-info">
              <img className="prof-picture" src={ `${this.state.imageUrl}` || "https://via.placeholder.com/150"} onClick={this.showImageUpload}/>
              <div className="profile-name" id="profile-name">
                <h3>{`${this.state.firstName} ${this.state.lastName}`}</h3>
                <a className="button" rel="nofollow" data-method="delete" name="Sign Out" href="/users/sign_out">Sign Out</a>
              </div>
            </div>

            <div className="upload-form" style={{ display: this.state.show }}>
              <p>Click on the "Choose File" button to upload your profile picture.</p>
              <form onSubmit={this.handleSubmit}>
                <input type="file" id="myFile" name="filename" onChange={this.showFile}/>
                <input type="submit" value="upload"/>
              </form>
            </div>
          </nav>
        </div>

    );
  }
}

export default ProfileInfo;
