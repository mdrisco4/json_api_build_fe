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

        axios.get('http://localhost:8080/movies/') 
        // + this.props.match.params.id)
        // axios.get(url + `${id}`)
        .then(res =>{
            console.log(res.data)
            console.log(this.props.match.params.id)
          this.setState({
            title: res.title,
            release_date: res.release_date,
            tagline: res.tagline,
            runtime: res.runtime,
            overview: res.overview,
            revenue: res.revenue
        })
        // console.log(this.props.match)
        // console.log(url + `${id}`)
        })
      }
    render() {
        return (
            <div>
                <h3>movie</h3>
            </div>
        );
    }
}

export default MovieDetails;