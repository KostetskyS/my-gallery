import React from 'react';
import '../assets/style/main.css';
import '../assets/style/albumsGrid.css';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';
import { useNavigate } from "react-router-dom";

export const Albums = () => {
  const [album, setAlbum] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {

  async function showAlbums() {
    function inAlbum(album) {
    navigate(`/albums/photos/${album._id}`);

  }
    try {

      const response = await getAlbum('/albums');
      const albums = response.data.data.map((album) => (

        <div onClick={() => inAlbum(album)} className='album' key={album._id}> 
          <h4 className='albumTitle'>{album.title}</h4>
          <img className='albumImg' src={album.image.img_link} alt=''/>
          <p>{album.description}</p>
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
      <Row className='addAlbums'>
        <CreatePhoto showAlbums={useEffect} isAlbum={true}/>
        <h3 className='albumTitle'>Albums</h3>
      </Row>
      <Row className='albums'>
        {album}
      </Row>
    </Container>
  )
}
