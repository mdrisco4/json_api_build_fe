import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Movies.css'


class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            release_date:'',
            tagline: '',
            runtime: '',
            overview: '',
            revenue: ''
          }
    }
    componentDidMount(){
        // const url = 'http://localhost:8080/movies/id'
        // const id = this.props.match.params.id;

        // axios.get(`http://localhost:8080//movies/${movie._id}`)
        // axios.get('http://localhost:8080/movies/' + this.props.match.params.id) 
        // .then(res =>{
        //     console.log(res.data)
        //     console.log(this.props.match.params.id)
        //   this.setState({
        //     title: res.title,
        //     release_date: res.release_date,
        //     tagline: res.tagline,
        //     runtime: res.runtime,
        //     overview: res.overview,
        //     revenue: res.revenue
        // })
        // })
      }
    render() {

        // let data = this.state.movieData
        // console.log(data)

    //     let list = data.map(movie => {
    // return(
    //     <div key={movie._id} className='movie-listing'>
    //         <h3 className='title'>{movie.title}</h3>
    //         <p className='released'>{movie.release_date}</p>
    //         <p className='tagline'>{movie.tagline}</p>
    //     </div>
    // )
        // })
        return (
            <div>
                <div className='movie-listing movie-listing-detailed'>
                    <div className='movie-text-details'>
                        <h3>movie</h3>
                        <p>title</p>
                        <p>release date</p>
                        <p>tagline</p>
                        <p>runtime</p>
                        <p>description</p>
                        <p>revenue</p>
                        <p>rated: </p>
                        <p>reviews</p>
                        <p>comments section</p>
                    </div>
                    <img src=''className='movie-photo-details' alt='movie poster pic'/>
                </div>
                {/* {list} */}
            </div>
        );
    }
}

export default MovieDetails;