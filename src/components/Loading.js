// jshint esversion:6
import React from 'react';
import {Spinner} from 'react-bootstrap';

export default function Loading() {
  return <div class="d-flex justify-content-center spinner-div"><Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner></div>}
