import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Actors.css'
import { BrowserRouter as router, Link, /*Switch,*/ Route } from "react-router-dom";

class Actors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorData: []
          }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/actors')
        .then(res =>{
        //   console.log(res.data)
          this.setState({
            actorData:res.data
          })
        })
      }
render() {

    // console.log(this.props)

            let data = this.state.actorData
            // console.log(data)
            let list = data.map(actor => {
        return(
            <div key={actor._id} className='actor-listing'>
                <h3 className='name'>{actor.name}</h3>
                <p className='birthday'>{actor.birthday}</p>
                <p className='birthplace'>{actor.place_of_birth}</p>
                <Link to={`/actor/${actor._id}`} >More Details</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>Actors</h1>
            <p>{this.props.title}</p>
            {/* <h3 className='title'>{this.props.movieData.title}</h3>
            <p className='released'>{this.props.movieData.release_date}</p>
            <p className='tagline'>{this.props.movieData.tagline}</p> */}
            {list}
        </div>
            )
        }
    }

export default Actors;