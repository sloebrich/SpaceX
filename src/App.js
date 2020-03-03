// jshint esversion:6
import React, {useState, useEffect} from 'react';
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
import axios from "axios";

function App() {

  const [latest, setLatest] = useState(90);
  const [fetched, setFetched] = useState(false);

   useEffect(()=>{
     axios('https://api.spacexdata.com/v3/launches/latest')
       .then(
         function(response) {

           if (response.status !== 200) {
             console.log('Looks like there was a problem. Status Code: ' +
             response.status);
           return;
         }
         setLatest(response.data.flight_number);
        setFetched(true);
       });
 }, [fetched]);

  return (
    <div className="App">
    <Router basename="/spacex">
    <Header latest={latest}/>
    <Switch>
  <Route path="/" exact component={Dashboard}/>
  <Route path="/:flightNumber" >
  <Detail latest={latest}/>
  </Route>
  <Route component={NotFound}/>
  </Switch>
  </Router>
  </div>
);
}

export default App;
