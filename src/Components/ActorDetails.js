import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Actors.css'


class ActorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actor: ''
          }
    }
    componentDidMount(){
        const url = 'http://localhost:8080/actors?'
        const id = this.props.match.params.id;

        // axios.get(`http://localhost:8080//movies/${movie._id}`)
        // axios.get('http://localhost:8080/movies')
        axios.get(url + `${id}`)
        .then(res =>{
            console.log(res.data)
            console.log(this.props.match.params.id)
          this.setState({
            actor:res.data
        })
        // console.log(this.props.match)
        console.log(url + `${id}`)
        })
      }
    render() {
        return (
            <div>
                <h1>sbchjsc</h1>
                {/* <p>`${movie._id}`</p> */}
                <h3>actor</h3>
                {/* <p>`${this.props.match.params}`</p> */}
                {/* <p>id</p> */}
            </div>
        );
    }
}

export default ActorDetails;