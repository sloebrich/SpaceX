// jshint esversion:6
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel(props){

return (<Carousel className="image-carousel">
  {props.images.map(image => <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={image}
      alt="Carousel slide"
    />
  </Carousel.Item>)}
</Carousel>)
}

export default ImageCarousel
