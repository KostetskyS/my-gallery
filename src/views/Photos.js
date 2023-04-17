import React from 'react';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';

export const Photos = () => {

  return (
    <Container>
        <Row>
            <CreatePhoto isAlbum={false}/>
        </Row>
    </Container>
    
  )
}
