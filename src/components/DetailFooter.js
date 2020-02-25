// jshint esversion:6
import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

function DetailFooter(props){
return <Nav className="justify-content-center">
    <Nav.Item>
    <LinkContainer to={"/"+props.prev}>
      <Nav.Link className="detail-footer-link">Previous</Nav.Link>
      </LinkContainer>
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to={"/"+props.next}>
      <Nav.Link className="detail-footer-link">Next</Nav.Link>
      </LinkContainer>
    </Nav.Item>
  </Nav>
}

export default DetailFooter
