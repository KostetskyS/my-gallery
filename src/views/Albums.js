import React from 'react'
import CreatePhoto from '../components/CreatePhoto'
import { Container, Row } from 'react-bootstrap';
export const Albums = () => {

  return (
    <Container>
        <Row>
            <CreatePhoto isAlbum={true}/>
        </Row>
    </Container>
  )
}
