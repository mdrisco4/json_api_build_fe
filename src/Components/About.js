import React, { Component } from 'react';
import '../Styles/About.css'

class About extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <h2>About</h2>
                    <p>This is a database in which you can view Movie and Actor info and submit new entries!</p>  
                </div>
            </div>
        );
    }
}

export default About;