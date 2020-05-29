import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import Container from "./components/Container/Container";
import TicketCard from "./components/TicketCard/TicketCard";
import SignUp from "./components/SignUp/SignUp";
// import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('http://localhost:5000/signup').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }
          <Route exact path={"/"}>
            <Container />
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/login"}>
            <LoginForm updateUser={this.updateUser} />
          </Route>
          <Route exact path={"/ticketCard"}>
            <TicketCard />
          </Route>
          <Footer />
        </div>
      </Router>

    );
  }
};

export default App;