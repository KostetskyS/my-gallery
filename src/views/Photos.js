import React from 'react';
import CreatePhoto from '../components/CreatePhoto';
import '../assets/style/photosGrid.css';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';
import { deleteItem } from '../helpers/deleteItem';
import { useParams } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { albumId } = useParams(); 

  const fetchPhotos = async () => {
    try {
      setIsLoading(true);
      const response = await getAlbum(`/photos/album?album_id=${albumId}`);
      setPhotos(response.data.data);
     
    } catch (error) {
      alert('Photos are not found');
    } finally {
      setIsLoading(false);
    }
  }

  const deletePhoto = async (photoId) => {
  
    try {
      const response = await deleteItem('/photos/delete', photoId);
      console.log(response) 
     
    } catch (error) {
      alert('Photos are not found');
    } finally {
      
    }
    
  }

  useEffect(() => {fetchPhotos()}, []); 
  

  return (
    <Container className='photo-container'> 
      <Row className='addAlbums'>
        <CreatePhoto onCreate={fetchPhotos} isAlbum={false}/>
        <h3 className='albumTitle'>Photos</h3>
      </Row>
      <Row className='photos'>
        {!isLoading && photos.length > 0 && photos.map((photo) => (
          <div className='photo' key={photo._id}>
            <div> 
              <h4 className='albumTitle'>Title: {photo.title} <BiTrash onClick={() => deletePhoto(photo._id)}/> 
              </h4>
              <img className='photoPic' src={photo.image_link} alt=''/>
              <p>Description: {photo.description}</p>
            </div> 
          </div>
        ))}
        {!isLoading && photos.length === 0 && <p>No photos available</p>}
        {isLoading && <p>Loading photos...</p>}
      </Row>
    </Container>
  );
}
