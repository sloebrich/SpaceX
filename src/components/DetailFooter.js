// jshint esversion:6
import React from "react";
import {Nav} from 'react-bootstrap';

function DetailFooter(props){
return <Nav className="justify-content-center">
    <Nav.Item>
      <Nav.Link href={"/"+props.prev} className="detail-footer-link">Previous</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href={"/"+props.next} className="detail-footer-link">Next</Nav.Link>
    </Nav.Item>
  </Nav>
}

export default DetailFooter
