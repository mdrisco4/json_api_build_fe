// Primary frontend done here


// import ListMovies from './Components/ListMovies';
// import SubmissionForm from './Components/SubmissionForm';

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, /*Switch,*/ Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Actors from './Components/Actors';
import Submissions from './Components/Submissions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    }
    // console.log(this.state.movieData)
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then(res =>{
      // console.log(res.data)
      this.setState({
        movieData:res.data
      })
      // console.log(this.state.movieData)
      // const data = res
    })
  }
  render() {
    // console.log(this.state.movieData)
    return (
      <div>
      <h1>Movies and Stuff!</h1>
  {/* <ListMovies movieData={this.state.movieData}/> */}
        <Router>
          <Navigation />
          <Route path="/home"
              component={Home}/>
            <Route path="/movies"
              component={Movies}
              movieData={this.state.movieData}
              // render={routerProps => (
              //   <Movies
              // {...routerProps}
              // {...this.state}
              // />)}
              />
            <Route path="/actors"
              component={Actors}/>
            <Route path="/submissions"
              component={Submissions}/>
        </Router>
            {/* <h2>Submit a Movie!!!</h2>
        <SubmissionForm /> */}

{/* 
        <Router>
          <Route
            path="/home"/>
          <Route
            path="/movies"/>
          <Route
            path="/actors"/>
          <Route
            path="/submissions"
            render={routerProps => (
            <Submissions/>
            )}
            />
        </Router> */}
      </div>
    );
  }
}

export default App;


