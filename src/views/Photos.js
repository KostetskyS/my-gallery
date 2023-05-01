import React from 'react';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';

export const Photos = () => {
const [photo, setPhoto] = useState('');

useEffect(() => {

 async function showPhotos() {
    try {

      const response = await getAlbum('/photos/album?album_id=${album_id}');
      const photos = response.data.data.map((photo) => (
        <div className='album' key={photo._id}> 
          <h4 className='albumTitle'>{photo.title}</h4>
          <img className='albumImg' src={photo.image.img_link} alt=''/>
          <p>{photo.description}</p>
        </div>
      ));
      setPhoto(photos);
      
    } catch (error) {
      alert('Photos is not found');
    }
  }

  showPhotos();
  
}, []);

  return (
    <Container className='photo-container'>
        <Row>
           <CreatePhoto showPhotos={useEffect} isAlbum={false}/>
           <h3>Photos</h3>
        </Row>
        <Row className='albums'>
        {photo}
      </Row>
    </Container>
    
  )
}
