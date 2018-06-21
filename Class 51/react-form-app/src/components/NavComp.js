import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavComp extends Component {
  render() {
    return (
      <div className="App">

        <button onClick={this.handleOpenMessages}>Messages</button>
        <button onClick={this.handleOpenAdder}>Adder</button>
        <button onClick={this.handleOpenAdderRefs}>AdderRefs</button>


      </div>
    );
  }

  handleOpenMessages=()=>{
    ReactDOM.render(<Messages />, document.getElementById('root'));
  }
  handleOpenAdder=()=>{
    ReactDOM.render(<Adder />, document.getElementById('root'));
  }
  handleOpenAdderRefs=()=>{
    ReactDOM.render(<AdderRefs />, document.getElementById('root'));
  }
}

export default NavComp;
