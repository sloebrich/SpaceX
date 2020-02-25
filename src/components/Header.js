// jshint esversion:6
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

function Header(){
  return <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/90">Latest</Nav.Link>
      <Nav.Link href="/55">Tesla</Nav.Link>
      <Nav.Link href={"/"+ (Math.floor(90*Math.random())+1)}>Random</Nav.Link>
      </Nav>
  </Navbar>
}

export default Header
      // <Nav.Link href="/upcoming">Upcoming</Nav.Link>
