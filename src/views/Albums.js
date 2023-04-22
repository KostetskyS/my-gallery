import React from 'react';
import '../assets/style/main.css';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

import { useState } from 'react';

export const Albums = () => {
  const [album, setAlbum] = useState('');

  async function showAlbums(data) {
    const token = localStorage.getItem('authToken');
    await axios('http://localhost:8080/api/albums', {
      headers: {
        'Authorization' : 'Bearer ' + token
      },
      method: 'GET',
    })
    .then(async function(response)  {
      // const url = response.data.data[0].title;  оно работало
      const albums = response.data.data.map((album) => {
        // console.log(album, 'album')
        return (  
          <div key={album._id}> 
            <h3>{album.title}</h3>
            <h1>{album.description}</h1>
           <img width='50px' height='50px' src={album.image.img_link}/>
          </div>
        )
      })
       
      setAlbum(albums); 
      // console.log(url);
      // console.log(response);

    })
    .catch(function(error){
      alert('Albums is not found');
    })
  }
  showAlbums()
  return (
    <Container className='photo-container'>
      <Row>
        <CreatePhoto showAlbums={showAlbums} isAlbum={true}/>
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
