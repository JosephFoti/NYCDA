import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Ticks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    }

    this.valUp = this.valUp.bind(this);
    this.valDown = this.valDown.bind(this);

  }

  render(){
    return(

      <div>
        <span>{this.state.val}   </span>
        <button className="Add" onClick={this.valUp}>Add</button>
        // //
        <button className="Sub" onClick={this.valDown}>Subtract</button>

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

  // Option 3

  valCheck=()=>{
    alert('the value is '+this.state.val);
  }

}

export default Ticks;


<input type="number" id='input1' value={this.state.val1}/><span> + </span><br />
<input type="number" id='input2' value={this.state.val2}/> <br />
