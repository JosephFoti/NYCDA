import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyNeedyComponent extends Component {
    constructor(props) {
      super(props);
      this.props = {
        id: 4,
        message: 'Oh dear!'
      }
    }

    render() {
      return <h1 id={this.props.id}>{this.props.message}</h1>
    }


  };

  MyNeedyComponent.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string
  }

export default MyNeedyComponent
