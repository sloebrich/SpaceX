// jshint esversion:6
import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function Header(){
  const [randomEntry, setRandomEntry] = useState(Math.floor(90*Math.random())+1);
  return <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <LinkContainer to="/">
      <Nav.Link href="/" active="false">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/90">
      <Nav.Link>Latest</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/55">
      <Nav.Link>Tesla</Nav.Link>
      </LinkContainer>
      <LinkContainer to={"/"+ randomEntry} onClick={()=> setRandomEntry(Math.floor(90*Math.random())+1)}>
       <Nav.Link >Random</Nav.Link>
       </LinkContainer>
      </Nav>
  </Navbar>
}

export default Header
