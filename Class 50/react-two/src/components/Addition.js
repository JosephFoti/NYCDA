import React, { Component } from 'react';

class Addition extends Component {

  constructor(props) {
    super(props)
    this.props = {
      val1: 0,
      val2: 0
    }

    this.state = {
      val3: ''
    }


  }

  render() {

    return (

      <div>

      val1: <span>{this.props.val1}</span>
      val2: <span>{this.props.val2}</span>
      <button onClick={this.add}>Add</button>
      <span>{this.state.val3}</span>

      </div>

    )
  }


  add = ()=>{
    this.setState({
      val3: this.props.val1 + this.props.val2
    })
  }



}


export default Addition
