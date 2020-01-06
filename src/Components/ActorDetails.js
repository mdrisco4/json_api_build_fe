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
        // 
        // 
        // 
        // 
        // })
        // })
      }
    render() {
        return (
            <div>
                <h3>actor</h3>
                <p>name</p>
                <p>aliases/nicknames</p>
                <p>birthday</p>
                <p>birthplace</p>
                <p>imdb id and link</p>
                <p>bio</p>
                <p>actor credits</p>
                <p>director credits</p>
                <p>producer credits</p>
                {/* {list} */}
            </div>
        );
    }
}

export default ActorDetails;