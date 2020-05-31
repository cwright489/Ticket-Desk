import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import Container from "./components/Container/Container";
import TicketCard from "./components/TicketCard/TicketCard";
//import { Router } from 'express';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LoginForm from "./components/LoginForm/LoginForm";

class App extends Component {
  constructor() {
    super()
    this.state = {
        loggedIn: false,
        username: false
    }

  
    this.updateUser = this.updateUser.bind(this)
  }



  updateUser(userObject) {
    this.setState({username: userObject.username}, () => {
      console.log('usrObj', this.state.username);
    })
    this.setState({loggedIn: userObject.loggedIn})
  }

  

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn && this.state.username ?
             <p>Join the party, {this.state.username}!</p> : <div></div>
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