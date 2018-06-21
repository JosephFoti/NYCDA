import React, { Component } from 'react';
import PropTypes from 'prop-types';

var arr = [];

class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      work: "",
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleMobileChange = this.handleMobileChange.bind(this);
    // this.handleWorkChange = this.handleWorkChange.bind(this);
  }

    render(){
      return(
        <div>
        <p>********** Contact Cards **********</p>
        <br/>
        Name: <input type='text' value={this.state.name} onChange={this.handleNameChange} />
        // Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
        // Mobile: <input type='text' value={this.state.mobile} onChange={this.handleMobileChange} />
        // Work: <input type='text' value={this.state.work} onChange={this.handleWorkChange} />

        <br/>
        <button type='submit' onClick={this.handleButtonClick}>Submit</button>
        <br/>
        <p>********** My Cards **********</p>

        <ul>
        {arr.map((i)=><li key={i}>
          {i}
          </li>
          )}
        </ul>

        </div>
        )
    }
    handleNameChange(event){
      this.setState({
        name: event.target.value
        // name: event.target.value
        // name: event.target.value

      });
    }

    handleButtonClick(){
      arr.push(this.state.name);
      // arr.push(this.state.email);
      // arr.push(this.state.name);
      // arr.push(this.state.name);
      // arr.push(this.state.name);

      this.setState({
      name: '',
      email: '',
      mobile: '',
      work: ''
    });
  }

}

export default ContactCard
