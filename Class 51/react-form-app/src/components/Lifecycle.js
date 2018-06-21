import React, { Component } from 'react';
// import $ from 'jquery';
import axios from 'axios';

class Lifecycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(data=>{
      console.log(data);
      this.setState({
        // users: data || for jquery
        users: data.data
      });
    });
  }
  render(){
    return(

      <div>
      {
        this.state.users.map((item,i)=>{
          return(<div key={i}><strong>Name:</strong>{item.name}<br/><hr/><br/></div>);
        })
      }
      </div>

    )
  }
}

export default Lifecycle
