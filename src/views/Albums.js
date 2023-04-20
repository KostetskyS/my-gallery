import React from 'react';
import '../assets/style/main.css';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row, Button } from 'react-bootstrap';
export const Albums = () => {

  return (
    <Container className='photo-container'>
        <Row>
            <CreatePhoto isAlbum={true}/>
            <h3>Albums</h3>
        </Row>
    </Container>
  )
}
