// jshint esversion:6
import React, {useState, useEffect} from "react";
import axios from "axios";
import LaunchCard from "../components/Card";
import Loading from "../components/Loading";
import { Row } from 'react-bootstrap';


function Dashboard() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    axios('https://api.spacexdata.com/v3/launches/past')
      .then(
        function(response) {

          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        setData(response.data.reverse());
       setFetched(true);
      });
}, [fetched]);
if(fetched){
  return (<div>
    <h1>SpaceX Launches</h1>
    <Row>
    {data.map((entry, index)=> <LaunchCard key={index} data={entry}/>)}
    </Row>
  </div>);
} else {return <Loading />}
}

export default Dashboard
