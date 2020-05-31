import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import Container from "./components/Container/Container";
import TicketCard from "./components/TicketCard/TicketCard";
//import { Router } from 'express';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App()
{
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path = {"/"}>
            <Container/>
          </Route>
          <Route exact path ={"/ticketCard"}>
            <TicketCard/>
          </Route>
          <Footer />
        </div>
      </Router>
      
    );
};

export default App;