import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

axios.get('http://localhost:8080/')
.then(res =>{
  console.log(res)
})

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default App;


