// Primary frontend done here
// /movies/:id ----  :id is arbitrary, can name whatever you like


// import ListMovies from './Components/ListMovies';
// import SubmissionForm from './Components/SubmissionForm';

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, /*Link, Switch,*/ Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import Actors from './Components/Actors';
import ActorDetails from './Components/ActorDetails';
import Submissions from './Components/Submissions';
import About from './Components/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    }
    // console.log(this.state.movieData)
  }
  

  componentDidMount(){
    axios.get('http://localhost:8080/movies')
    .then(res =>{
      // console.log(res.data)
      this.setState({
        movieData:res.data
      })
      // console.log(this.state.movieData)
    })
  }
  render() {
    // console.log(this.state.movieData)
    return (
      <div>
        <Router>
          <Navigation />
        <header>
          <h1>Movies and Stuff!</h1>
        </header>
        <main>
          <p>Top of Main: Always Here</p>
            <Route path="/movies"
                exact component={Movies}/>              
            <Route path="/movies/:id"
                component={MovieDetails}/>
            <Route path="/actors"
                exact component={Actors}/>
            <Route path="/actors/:id"
                component={ActorDetails}/>
            <Route path="/submissions"
                component={Submissions}/>
            <Route path="/About"
                component={About}/>
        <p>--search function here?--</p>
        </main>
        </Router>
        <footer>
          <p>copyright, data source and other attribution info</p>
        </footer>
      </div>
    );
  }
}

export default App;


// Route path="/movies" render={() => (<Movie movieProps={this.state}>)}
// Movies movieProps={this.state}

// component={Movies}
// movieData={this.state.movieData}
// render={routerProps => (
//   Movies
//   {...routerProps}
//   {...this.state}