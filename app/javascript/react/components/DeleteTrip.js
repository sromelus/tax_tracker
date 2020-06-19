import React, { Component } from 'react';

export default class DeleteTrip extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: '',
      errors: ''
    }
  }


  handleDeleteTrip = () => {
    fetch(`/api/v1/trips/${this.props.id}`, {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
       })
       .then(response => {
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
           message: body.message,
           errors: body.errors
         })
         this.props.props.router.push('/');
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return (
      <div className={this.props.className}>
        Are you sure? &nbsp;
        <a className="button" onClick={this.handleDeleteTrip}>YES</a>
      </div>
    );
  }
}
