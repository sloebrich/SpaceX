// jshint esversion:6
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./containers/Dashboard";
import Detail from "./containers/Detail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
    <Router basename="/spacex">
    <Header />
    <Switch>
  <Route path="/" exact component={Dashboard}/>
  <Route path="/:flightNumber" component={Detail}/>
  <Route component={NotFound}/>
  </Switch>
  </Router>
  </div>
);
}

export default App;
