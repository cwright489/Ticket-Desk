import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

class App extends Component {
    constructor () {
        super()
        this.state = { 
          data: "" 
      }
    }
  
//     callAPI() {
//     // const proxy = 'https://cors-anywhere.herokuapp.com/'
//     const url = 'https://localhost:4000/express_backend'
//     fetch(url)
//     .then(res => res.json())
//     .then(res => this.setState({ data: res }))
//     .catch(err => err);
//   }

//   componentDidMount() {
//     this.callAPI();
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro"></p>
        <p>hello</p>
      </div>
    );
  };
};

export default App;