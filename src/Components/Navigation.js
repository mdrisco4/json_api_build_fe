import React, { Component } from 'react';
import{ Route, Link, /*switch*/ } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Home from './About';
import Movies from './Movies';
import Actors from './Actors';
import Submissions from './Submissions';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className='nav-bar'>
                    <nav>
                        <Link to="/" className='nav-links'>Home</Link>
                        <Link to="/about" className='nav-links'>About</Link>
                        <Link to="/movies"className='nav-links'>Movies</Link>
                        <Link to="/actors"className='nav-links'>Actors</Link>
                        <Link to="/submissions"className='nav-links'>Submissions</Link>
                    </nav>
                </div>
            <Router>
                <Route
                    path="/"
                    // component={Home}
                    />
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