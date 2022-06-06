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
  const latest = 109;

  return (
    <div className="App">
    <Router>
      <Header latest={latest}/>
      <Switch>
        <Route path="/spacex" exact component={Dashboard}/>
        <Route path="/spacex/:flightNumber" >
          <Detail latest={latest}/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </div>
);
}

export default App;
