import React, { Component } from 'react';
    // ^ Brings in parent component from react.

class HelloWorld extends Component {
  //                     ^ all custom classes extend component, must be required
  render() {
    return <h1>Hello, {this.props.name}!</h1>
  }
};

export default HelloWorld;
