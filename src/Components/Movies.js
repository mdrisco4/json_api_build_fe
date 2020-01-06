import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Movies.css'
import { BrowserRouter as Router, Link, /*Switch,*/ Route } from "react-router-dom";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: []
          }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/movies')
        .then(res =>{
        //   console.log(res.data)
          this.setState({
            movieData:res.data
          })
        })
      }
render(){

    // console.log(this.props)

            let data = this.state.movieData
            // console.log(data)
            let list = data.map(movie => {
        return(
            <div key={movie.title}>
                <div key={movie._id} className='movie-listing'>
                    <div className="text-container">
                        <h3 className='title'>{movie.title}</h3>
                        <p className='released'>Release Date: {movie.release_date}</p>
                        <p className='tagline'>"{movie.tagline}"</p>
                        <Link className='details' to={`/movies/${movie._id}`} >More Details</Link>
                    </div>
                    <img src=''className='photo' alt='pic'/>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>Movies</h1>
            <p>{this.props.title}</p>
            {list}
        </div>
            )
        }
    }

export default Movies;