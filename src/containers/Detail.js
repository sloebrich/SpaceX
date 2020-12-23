// jshint esversion:6
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DetailCard from "../components/DetailCard";
import DetailFooter from "../components/DetailFooter";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

function Detail(props){

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

if(0<flightNumber && flightNumber<=props.latest){
  if(fetched){
  return (<div className="detail-container">
              <DetailCard entry={launch}/>
              <DetailFooter entry={Number(flightNumber)} latest={props.latest}/>
            </div>)
        } else { return <Loading/>}
} else {
  return <NotFound/>
}
}

export default Detail;
