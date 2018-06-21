import React, { Component } from 'react';

class AddressBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }


  render() {
    return (

      <div>

        <p>Name: <input ref="name" type="text"/> </p>
        <p>Email: <input ref="email" type="text"/> </p>
        <p>Phone: <input ref="phone" type="text"/> </p>
        <p>Address: <input ref="address" type="text"/> </p>
        <button onClick={this.handleButtonClick}>save</button>
          <br/>
        <hr/>
        <br/>


          <div> {this.state.contact} </div>
          <p> <strong>Name: </strong>{this.state.content[0]} </p>
          <p> <strong>Email: </strong>{this.state.content[1]} </p>
          <p> <strong>Phone: </strong>{this.state.content[2]} </p>
          <p> <strong>Address: </strong>{this.state.content[3]} </p>

      </div>

    )
  }

  handleButtonClick=()=>{
    this.setState({
      content: [
        this.refs.name.value,
        this.refs.email.value,
        this.refs.phone.value,
        this.refs.address.value
      ]
    });

    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.phone.value = '';
    this.refs.address.value  = '';

  }
}

export default AddressBook;
