import React from 'react';
import '../assets/style/main.css';
import '../assets/style/albumsGrid.css';
import CreatePhoto from '../components/CreatePhoto';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';
import { useNavigate } from "react-router-dom";

export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function goToTheAlbum(album) {
      navigate(`/albums/photos/${album._id}`);
  }

  const fetchAlbums = async () => {
      try {
          setIsLoading(true)
          const response = await getAlbum('/albums');
          setAlbums(response.data.data);
      } catch (error) {
          alert('Albums is not found');
      } finally {
          setIsLoading(false)
      }
  }

  useEffect(fetchAlbums, []);

  // return (
  //   <Container className='photo-container'>
  //     <Row className='addAlbums'>
  //       <CreatePhoto showAlbums={useEffect} isAlbum={true}/>
  //       <h3 className='albumTitle'>Albums</h3>
  //     </Row>
  //     <Row className='albums'>
  //       {!isLoading && albums.length > 0 && albums.map((album) => (
  //           <div onClick={() => goToTheAlbum(album)} className='album' key={album._id}>
  //             <h4 className='albumTitle'>{album.title}</h4>
  //             <img className='albumImg' src={album.image.img_link} alt=''/>
  //             <p>{album.description}</p>
  //         </div>
  //       ))}
  //         {!isLoading && albums.length === 0 && <div>Альбомов нет</div>}
  //         {isLoading && <div>Загрузка альбомов...</div>}
  //     </Row>
  //   </Container>
  // )
}