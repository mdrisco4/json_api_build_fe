import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Actors.css'
import { BrowserRouter as Router, Link, /*Switch,*/ Route } from "react-router-dom";

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
            <div key={actor.name}>
                <div key={actor._id} className='actor-listing'>
                    <div className="text-container">
                        <h3 className='name'>{actor.name}</h3>
                        <p className='birthday'>{actor.birthday}</p>
                        <p className='birthplace'>{actor.place_of_birth}</p>
                        <Link className='details' to={`/actor/${actor._id}`} >More Details</Link>
                    </div>
                    <img src=''className='photo' alt='pic'/>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>Actors</h1>
            <p>{this.props.title}</p>
            {list}
        </div>
            )
        }
    }

export default Actors;