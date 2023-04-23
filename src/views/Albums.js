import React from 'react';
import '../assets/style/main.css';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';

export const Albums = () => {
  const [album, setAlbum] = useState('');

  useEffect(() => {

  async function showAlbums(data) {

    try {
      const response = await getAlbum('/albums');
      const albums = response.data.data.map((album) => (
        <div key={album._id}> 
          <h3>{album.title}</h3>
          <h4>{album.description}</h4>
          <img width='50px' height='50px' src={album.image.img_link}/>
        </div>
      ));
      setAlbum(albums);
    } catch (error) {
      alert('Albums is not found');
    }
  }
  showAlbums();
}, []);

  return (
    <Container className='photo-container'>
      <Row>
        <CreatePhoto showAlbums={useEffect} isAlbum={true}/>
        <h3>Albums</h3>
      </Row>
      <Row>
        <div className='albumsMain'>  
        {album}  
        </div>
      </Row>
    </Container>
  )
}
