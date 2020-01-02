// Primary frontend done here



import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import{ Route, Link, /*switch*/ } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
import ListMovies from './Components/ListMovies'
import SubmissionForm from './Components/SubmissionForm'
import Submissions from './Components/submissions';

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
        <Router>
          <nav>
            <Link className='nav-links'
              id='Home'>
              <h3 className="title" >Home</h3>
            </Link>
            <Link className='nav-links'
              id='Movies'>
              <h3 className="title" >Movies</h3>
            </Link>
            <Link className='nav-links'
              id='Actors'>
              <h3 className="title" >Actors</h3>
            </Link>
            <Link className='nav-links'
              id='Submissions'>
              <h3 className="title" >Submissions</h3>
            </Link>
          </nav>
        <h1>Movies and Stuff!</h1>
        </Router>
        <ListMovies movieData={this.state.movieData}/>
        <h2>Submit a Movie!!!</h2>
        <SubmissionForm />


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
        </Router>
      </div>
    );
  }
}

export default App;


