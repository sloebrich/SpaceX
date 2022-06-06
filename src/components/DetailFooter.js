// jshint esversion:6
import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {baseUrl} from '../Constants';

function DetailFooter(props){
  const entry = props.entry;
  const prev = entry -1;
  const next = entry +1;
return <Nav className="justify-content-center">
    {entry!==props.latest && (<Nav.Item>
    <LinkContainer to={`${baseUrl}/${next}`}>
      <Nav.Link className="detail-footer-link"><span aria-hidden="true" className="carousel-control-prev-icon"></span></Nav.Link>
      </LinkContainer>
    </Nav.Item>)}
    {entry!==1 && (<Nav.Item>
    <LinkContainer to={`${baseUrl}/${prev}`}>
      <Nav.Link className="detail-footer-link"><span aria-hidden="true" className="carousel-control-next-icon"></span></Nav.Link>
      </LinkContainer>
    </Nav.Item>)}
  </Nav>
}

export default DetailFooter
