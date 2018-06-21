import React, { Component } from 'react';
// import $ from 'jquery';
import axios from 'axios';
//     ^ More extensive ajax REST request, must write custom error messages

class MovieApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){

    axios.get('https://www.omdbapi.com', {
        params: {
          apikey: "9ca25e95",
          t: "vertigo"
        }
      })
      .then(data=>{
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
      <h4>{this.state.users.Title}</h4>
      <img src={this.state.users.Poster}/>
      <h6>{this.state.users.Director}, {this.state.users.Genre}</h6>
      <p>{this.state.users.Plot}</p>
      </div>

    )
  }
}

export default MovieApp
