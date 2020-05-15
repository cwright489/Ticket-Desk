import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import Container from "./components/Container/Container";

class App extends Component {
  constructor() {
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

        <NavBar />
        <Container />
        <Footer />

      </div>
    );
  };
};

export default App;