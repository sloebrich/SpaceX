// jshint esversion:6
import React from "react";
import {Card} from 'react-bootstrap';

function DetailCardUpoming(props){

  const launch = props.entry

 return (<Card bg="dark" text="white" className="detail-card">
 <Card.Body>
 <center>
 <Card.Title>{launch.flight_number}. {launch.mission_name} (Upcoming)</Card.Title>
 </center>
   </Card.Body>
 <Table variant="dark">
 <tbody>
 <tr>
 <td style={{textAlign: "right", width: "25%"}}>Launch date: </td>
 <td>{launch.launch_date_utc.substring(9,10)}/{launch.launch_date_utc.substring(6,7)}/{launch.launch_date_utc.substring(0,4)}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Launch site: </td>
 <td>{launch.launch_site.site_name_long}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Rocket: </td>
 <td>{launch.rocket.rocket_name}, type {launch.rocket.rocket_type}</td>
 </tr>
 <tr>
 <td style={{textAlign: "right"}}>Payload: </td>
 <td>{launch.rocket.second_stage.payloads.map(function(payload){return payload.payload_id+ " "+ payload.payload_type})}</td>
 </tr>
 </tbody>
 </Table>
   <Card.Body>
 <Card.Text>
 <p>{launch.details}</p>
 </Card.Text>
</Card.Body>
 </Card>)
}

export default DetailCardUpcoming;
