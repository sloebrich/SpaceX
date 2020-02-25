// jshint esversion:6
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function Header(){
  var randomEntry = (Math.floor(90*Math.random())+1)
  return <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <LinkContainer to="/">
      <Nav.Link href="/">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/90">
      <Nav.Link>Latest</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/55">
      <Nav.Link>Tesla</Nav.Link>
      </LinkContainer>
       <Nav.Link href={"/"+ randomEntry}>Random</Nav.Link>
      </Nav>
  </Navbar>
}

export default Header
      // <Nav.Link href="/upcoming">Upcoming</Nav.Link>
      // <LinkContainer to={"/"+ rd} replace>
       // <Nav.Link href={"/"+ rd}>Random</Nav.Link>
       // </LinkContainer>
