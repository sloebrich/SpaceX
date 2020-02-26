// jshint esversion:6
import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

function DetailFooter(props){
  const entry = props.entry;
  const prev = entry -1;
  const next = entry +1;
return <Nav className="justify-content-center">
    {entry!==1 && (<Nav.Item>
    <LinkContainer to={"/"+prev}>
      <Nav.Link className="detail-footer-link">Previous</Nav.Link>
      </LinkContainer>
    </Nav.Item>)}
    {entry!==90 && (<Nav.Item>
    <LinkContainer to={"/"+next}>
      <Nav.Link className="detail-footer-link">Next</Nav.Link>
      </LinkContainer>
    </Nav.Item>)}
  </Nav>
}

export default DetailFooter
