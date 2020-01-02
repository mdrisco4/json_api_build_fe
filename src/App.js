import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import ListMovies from './Components/ListMovies'
import SubmissionForm from './Components/SubmissionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then(res =>{
      // console.log(res.data)
      this.setState({
        movieData:res.data
      })
      // console.log(this.state)
      // const data = res
    })
  }
  render() {
    return (
      <div>
        <h1>Movies and Stuff!</h1>
        <ListMovies movieData={this.state.movieData}/>
        <h2>Submit a Movie</h2>
        <SubmissionForm />
        {/* <DetailMovie/> */}
      </div>
    );
  }
}

export default App;


