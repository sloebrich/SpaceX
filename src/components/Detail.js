// jshint esversion:6
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DetailCard from "./DetailCard";
import DetailFooter from "./DetailFooter";
import Loading from "./Loading";

function Detail(){

  const flightNumber = useParams().flightNumber;
  const [launch, setLaunch] = useState({});
  const [fetched, setFetched] = useState(false);

   useEffect(()=>{
     axios('https://api.spacexdata.com/v3/launches/'+flightNumber)
       .then(
         function(response) {

           if (response.status !== 200) {
             console.log('Looks like there was a problem. Status Code: ' +
             response.status);
           return;
         }
         setLaunch(response.data);
        setFetched(true);
       });
 }, [flightNumber, fetched]);
if(fetched){
  return (<div className="detail-container">
              <DetailCard entry={launch}/>
              <DetailFooter prev={(Number(flightNumber)-1)} next={(Number(flightNumber)+1)}/>
            </div>)
        } else { return <Loading/>}
}

export default Detail;
