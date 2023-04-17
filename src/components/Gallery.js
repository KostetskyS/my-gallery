import React from "react";
import { Container, Row } from 'react-bootstrap';
import CreatePhoto from "../views/CreatePhoto";

function Gallery() {
    return (
      <Container className='column justify-content-start'>
        <CreatePhoto/>
      </Container>
    );
  }
  export default Gallery