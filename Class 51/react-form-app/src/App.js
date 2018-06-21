import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//       ^ Creates Alias for BrowserRouter
//                                ^ adds linking components

import Route from 'react-router-dom/Route';

import './App.css';
import Adder from './components/AddNums.js';
import Messages from './components/Messages.js';
import AdderRefs from './components/AddNumsRef.js';
import AddressBook from './components/AddressBook.js';
import Lifecycle from './components/Lifecycle.js';
import MovieApp from './components/MovieApp.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>



          <Route path='/' render={

            () => {
              return (
              <ul>

                <li>
                  <Link to='/' >Home</Link>
                </li>
                <li>
                  <Link to='/messages/:name'>Messages</Link>
               {/* ^ <a> tag */}
                    {/* ^ href attr */}
                                  {/* ^ this.props.match.params.name */}
                </li>
                <li>
                  <Link to='/addnums' >Add Nums</Link>
                </li>
                <li>
                  <Link to='/address' >Address Book</Link>
                </li>
                <li>
                  <Link to='/lifecycle' >Lifecycle</Link>
                </li>
                <li>
                  <Link to='/movieapp' >movieapp</Link>
                </li>

              </ul>
              );
            }
            } />


          <Route path='/movieapp' exact strict component={MovieApp} />

          <Route path='/lifecycle' exact strict component={Lifecycle} />

          <Route path='/messages/:name' exact strict component={Messages} />
              {/*                        ^ renders component, you can not establish props */}


          <Route path='/addnums' exact strict render={
              //                        ^ sets route to accept path parameter strictly e.g. '/messages' !== '/messages/'
              //                 ^ tells route to only render contents on exact route

            () => {
              return <Adder />
            }
            } />

          <Route path='/address' exact strict render={
              //                        ^ sets route to accept path parameter strictly e.g. '/messages' !== '/messages/'
            () => {
              return <AddressBook />
            }
            } />

        </div>
      </Router>
    );
  }


}



export default App;
