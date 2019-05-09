import React from 'react';

class NewTripScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miles:'',
      netEarning: ''
    }
    this.handleMilesChange = this.handleMilesChange.bind(this)
    this.handleNetEarningChange = this.handleNetEarningChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMilesChange(event){
    this.setState({miles: event.target.value })
  }

  handleNetEarningChange(event){
    this.setState({netEarning: event.target.value})
  }

  handleSubmit = (event) => {
    console.log('i was clicked')
    event.preventDefault()

    let formpayload = {
      miles: this.state.miles,
      netEarning: this.state.netEarning
    }

    this.props.addNewTrip(formpayload)
    .then(res => {
      this.setState({
        miles: res.miles,
        netEarning: res.netEarning
      })
    })
  }


  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Miles:
            <input
              type="text"
              name="miles"
              value={this.state.miles}
              onChange={this.handleMilesChange}
            />
          </label>
          <label> Net Earning:
            <input
              type="text"
              name="netEarning"
              value={this.state.netEarning}
              onChange={this.handleNetEarningChange}
            />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewTripScreen
