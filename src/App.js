// jshint esversion:6
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
    <Header />
    <Router>
    <div>
  <Switch>
  <Route exact path="/" component={Dashboard}/>
  <Route path="/:flightNumber">
    <Detail />
  </Route>
  <Route component={NotFound} />
  </Switch>
  </div>
  </Router>
  <Footer />
  </div>
);
}

export default App;
