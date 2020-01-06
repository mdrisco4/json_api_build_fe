import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Actors.css'


class ActorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            also_known_as: '',
            birthday: '',
            place_of_birth: '',
            imdb_id: '',
            biography: ''
          }
    }
    componentDidMount(){
        // const url = 'http://localhost:8080/actors/id?'
        // const id = this.props.match.params.id;

        // // axios.get(`http://localhost:8080//movies/${movie._id}`)
        // // axios.get('http://localhost:8080/movies')
        // axios.get(url + `${id}`)
        // .then(res =>{
        //     console.log(res.data)
        //     console.log(this.props.match.params.id)
        //   this.setState({
        //     actor:res.data
        // })
        // // console.log(this.props.match)
        // console.log(url + `${id}`)
        // })
      }
    render() {
        return (
            <div>
                <h1>sbchjsc</h1>
                <h3>actor</h3>
            </div>
        );
    }
}

export default ActorDetails;