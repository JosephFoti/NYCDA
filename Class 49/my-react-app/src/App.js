import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloFriend from './components/HelloFriend';
import MyNeedyComponent from './components/MyNeedyComponent';
import ContactCard from './components/ContactCard';

class App extends Component {
  render() {
    return (

      <div className="App">

        <h1>Welcome to React</h1>
        <p className="para">Reacting non-stop</p>
        <h3>Since 201{2 + 2}</h3>
        <HelloWorld name="Tom" />
        <HelloFriend name="My friend Tim" />
        <MyNeedyComponent id={5} message="Oh dear!" />
        <ContactCard />

      </div>

    );
  }
}


export default App;
