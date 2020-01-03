import React, { Component } from 'react';
import '../Styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className='about'>
              <h2>About</h2>
              <p>This is a database in which you can view Movie and Actor info and submit new entries!</p>  
            </div>
        );
    }
}

export default Home;