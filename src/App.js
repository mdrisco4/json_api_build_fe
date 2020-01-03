// Primary frontend done here
// /movies/:id ----  :id is arbitrary, can name whatever you like


// import ListMovies from './Components/ListMovies';
// import SubmissionForm from './Components/SubmissionForm';

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, /*Link, Switch,*/ Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import About from './Components/About';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import Actors from './Components/Actors';
import ActorDetails from './Components/ActorDetails';
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
    axios.get('http://localhost:8080/movies')
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
  {/* <ListMovies movieData={this.state.movieData}/> */}
        <Router>
          <Navigation />
          {/* <nav>
            <Link to="/" className='nav-links'>Home</Link>
            <Link to="/about" className='nav-links'>About</Link>
            <Link to="/movies"className='nav-links'>Movies</Link>
            <Link to="/actors"className='nav-links'>Actors</Link>
            <Link to="/submissions"className='nav-links'>Submissions</Link>
          </nav> */}
        {/* <h1>Movies and Stuff!</h1> */}
        <header>
        <h1>Movies and Stuff!</h1>
        </header>
        <main>
          <p>Top of Main: Always Here</p>
          <Route path="/About"
              component={About}/>
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
        </main>
              </Router>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;




{/* <Route path="/movies" render={() => (<Movie movieProps={this.state}>)}/>
<Movies movieProps={this.state} />
component={Movies}
movieData={this.state.movieData}
render={routerProps => (
<Movies
{...routerProps}
{...this.state}
/>)}
</Route> */}

