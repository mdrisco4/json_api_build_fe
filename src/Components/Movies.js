import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Movies.css'

// import App from '../App'
// import { render } from '@testing-library/react';

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
            <div key={movie._id} className='movie-listing'>
                <h3 className='title'>{movie.title}</h3>
                <p className='released'>{movie.release_date}</p>
                <p className='tagline'>{movie.tagline}</p>
                <button>More Details</button>
            </div>
        )
    })
    return (
        <div>
            <h1>Movies</h1>
            <p>{this.props.title}</p>
            {/* <h3 className='title'>{this.props.movieData.title}</h3>
            <p className='released'>{this.props.movieData.release_date}</p>
            <p className='tagline'>{this.props.movieData.tagline}</p> */}
            {list}
        </div>
            )
        }
    }


export default Movies;



// const ListMovies = (props) => {
// let {movieData} = props
// let list = movieData.map(movie => {
//     // console.log(movie)
//     return (
//         <div key={movie._id} className='movie-listing'>
//             <h3 className='title'>{movie.title}</h3>
//             <p className='released'>{movie.release_date}</p>
//             <p className='tagline'>{movie.tagline}</p>
//             <button>More Details</button>
//         </div>
//     )

// });
//     return (
// <div>
//     {/* <p>Hello</p> */}
//     {list}
// </div>
//     )
// };

