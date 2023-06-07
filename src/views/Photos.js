import React from 'react';
import CreatePhoto from '../components/CreatePhoto';
import '../assets/style/photosGrid.css';
import { Container, Row, Modal, ModalHeader, ModalBody, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAlbum } from '../helpers/getAlbum';
import { deleteItem } from '../helpers/deleteItem';
import { useParams } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { albumId } = useParams();

  const fetchPhotos = async () => {
    try {
      setIsLoading(true);
      const response = await getAlbum(`/photos/album?album_id=${albumId}`);
      if (response.data.success) {
        setPhotos(response.data.data);
      } else {
        Toastify({
          text: "Photos are not found",
          offset: {
            x: 50,
            y: 10
          },
        }).showToast();
      }

    } catch (error) {
      Toastify({
        text: "Photos are not found",
        offset: {
          x: 50,
          y: 10
        },
      }).showToast();

    } finally {
      setIsLoading(false);
    }
  };

  const deletePhoto = async (photoId) => {
    try {
      const body = {
        photo_id: photoId
      };

      const response = await deleteItem('/photos/delete', body);

      if (response.success) {
        await fetchPhotos();
      } else {
        Toastify({
          text: "Something went wrong",
          offset: {
            x: 50,
            y: 10
          },
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "Something went wrong",
        offset: {
          x: 50,
          y: 10
        },
      }).showToast();
    } finally {
      await fetchPhotos();
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const totalPhotos = photos.length;

  const handlePreviousPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < totalPhotos - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <Container className="photo-container">
      <Row className="addAlbums">
        <CreatePhoto onCreate={fetchPhotos} isAlbum={false} />
        <h3 className="albumTitle">Photos</h3>
      </Row>
      <Row className="photos">
        {!isLoading && photos.length > 0 && photos.map((photo, index) => (
          <div className="photo" key={photo._id}>
            <div>
              <h4 className="albumTitle">
                Title: {photo.title}{' '}
                <BiTrash className="trash" onClick={() => deletePhoto(photo._id)} />
              </h4>
              <img onClick={handleShow} className="photoPic" src={photo.image_link} alt="" />
              <p>Description: {photo.description}</p>
            </div>
          </div>
        ))}
        {!isLoading && photos.length === 0 && <p>No photos available</p>}
        {isLoading && <p>Loading photos...</p>}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>{photos[currentPhotoIndex]?.title}</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <img
            onClick={handleClose}
            className="photoModal"
            src={photos[currentPhotoIndex]?.image_link}
            alt=""
          />
        </ModalBody>
        <div className="arrows">
          <BsChevronLeft size={20} onClick={handlePreviousPhoto} />
          <BsChevronRight size={20} onClick={handleNextPhoto} />
        </div>
      </Modal>
    </Container>
  );
};
