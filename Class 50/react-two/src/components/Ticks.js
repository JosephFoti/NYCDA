import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Ticks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    }

  }

  render(){
    return(

      <div>
        <span>{this.state.val}   </span>
        <button className="Add" onClick={this.valUp.bind(this)}>Add</button>
        // //
        <button className="Sub" onClick={this.valDown.bind(this)}>Subtract</button>
        <button className="Check" onClick={this.valCheck}>Check</button>


      </div>

    )
  }



  valDown() {
    if (this.state.val === 0) {
      alert('Can not be less than zero')
    } else {
      this.setState({
        val: this.state.val - 1
      });
    }



  }

  valUp() {
    this.setState({
      val: this.state.val + 1
    })
  }
// local bind (Experimental)
  valCheck=()=>{
    alert('the value is '+this.state.val);
  }


}

export default Ticks;
