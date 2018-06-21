import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Adder from './components/AddNums.js';
import Messages from './components/Messages.js';
import AdderRefs from './components/AddNumsRef.js';
import AddressBook from './components/AddressBook.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <button onClick={this.handleOpenMessages}>Messages</button>
        <button onClick={this.handleOpenAdder}>Adder</button>
        <button onClick={this.handleOpenAdderRefs}>AdderRefs</button>
        <button onClick={this.handleOpenAddressBook}>Address Book</button>


      </div>
    );
  }

  handleOpenMessages=()=>{
    ReactDOM.render(<Messages />, document.getElementById('root'));
  }
  handleOpenAddressBook=()=>{
    ReactDOM.render(<AddressBook />, document.getElementById('root'));
  }
  handleOpenAdder=()=>{
    ReactDOM.render(<Adder />, document.getElementById('root'));
  }
  handleOpenAdderRefs=()=>{
    ReactDOM.render(<AdderRefs />, document.getElementById('root'));
  }
}



export default App;
