import React, { Component } from 'react';
import{ Route, Link, /*switch*/ } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Home from './Home';
import Movies from './Movies';
import Actors from './Actors';
import Submissions from './Submissions';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/home" className='nav-links'>home</Link>
                    <Link to="/movies"className='nav-links'>Movies</Link>
                    <Link to="/actors"className='nav-links'>Actors</Link>
                    <Link to="/submissions"className='nav-links'>Submissions</Link>
                </nav>
            <Router>
                <Route
                    path="/home"
                    component={Home}/>
                <Route
                    path="/movies"
                    component={Movies}/>
                <Route
                    path="/actors"
                    component={Actors}/>
                <Route
                    path="/submissions"
                    component={Submissions}
                    />
            </Router>
            </div>
        );
    }
}

export default Navigation;