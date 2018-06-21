import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard'
import Ticks from './components/Ticks'
import Addition from './components/Addition'

class App extends Component {
  render() {
    return (
      <div>

        <ContactCard name="Joe" email="eljofo" mobile="917-608-6513" work="646-979-5063" />
        <ContactCard name="Reggie" email="RegOgee" mobile="917-231-4325" work="646-049-2841" />
        <ContactCard name="Gabby" email="gabbygabby" mobile="917-405-1523" work="646-9291-0281" />
        <br />
        <Ticks val={2} />
        <br />
        <Addition val1={1} val2={3}/>

      </div>
    );
  }
}

export default App;
