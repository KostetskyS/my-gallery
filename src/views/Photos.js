import React from 'react';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';

export const Photos = () => {

  return (
    <Container className='photo-container'>
        <Row>
           <CreatePhoto isAlbum={false}/>
           <h3>Photos</h3>
        </Row>
    </Container>
    
  )
}
