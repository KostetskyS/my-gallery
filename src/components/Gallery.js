import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { nanoid } from "nanoid";
import Upload from "./Upload";
function Gallery() {
    function id() {
       return nanoid(10);
    }
    const images = [
      { id: id(), src: '../assets/images/logo.png', alt: 'Image 1' },
    ];
    return (
      <Container>
        <Row>
          {images.map((image) => (
            <Col key={image.id} md={4} sm={6} xs={12}>
              
            </Col>
          ))}
        </Row>
        <Upload/>
      </Container>
    );
  }
  export default Gallery