import React, { useState } from "react";
import { Form, Button, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import { customFetch } from "../helpers/customFetch";
import '../assets/style/imagesUpload.css';

function CreatePhoto({ isAlbum }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();
  const [albumName, setAlbumName] = useState('');
  const [albumDesc, setAlbumDesc] = useState('');

  const handleAlbumNameChange = (event) => {
    setAlbumName(event.target.value);
  };

  const handleAlbumDescChange = (event) => {
    setAlbumDesc(event.target.value);

}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleUpload = async (event) => {
    event.preventDefault(); 
    const url = '/albums/create';
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', albumName);
    formData.append('description', albumDesc);
    const res = await customFetch(url, formData);
    const data = await res.json();
    setUploaded(data);
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
 
if (uploaded) {
    window.location.reload();
}
  return (
<>
       {!isAlbum && (  
        <> 
        <Button className="btn btn-secondary" onClick={handleShow}>Upload Photo</Button>
      <Modal show={show} onHide={handleClose}> 
        <ModalHeader closeButton> 
          <Modal.Title>Upload Photo</Modal.Title>
        </ModalHeader> 

        <ModalBody> 
          <Form className="photos-form" onSubmit={handleUpload}> 
          <Form.Label>Upload photo</Form.Label>
        <Form.Group controlId="formFile">
          <Form.Control 
            multiple
            type="file" 
            onChange={handleFileChange}
            accept='image/*,.png,.jpg,.gif,.web'
          />
        </Form.Group>
        <input placeholder="create photo name"/>
        <input placeholder="create photo description"/>
        <Button className="btn btn-secondary" type="submit">Upload</Button>
      </Form>
      </ModalBody>
      </Modal>
        </>
      )}

    {isAlbum && ( 
      <>
      <Button className="btn btn-secondary" onClick={handleShow}>Create Album</Button>
      <Modal show={show} onHide={handleClose}> 
      
        <ModalHeader closeButton> 
          <Modal.Title>Create album</Modal.Title>
        </ModalHeader>
        <ModalBody> 
          <Form className="albums-form" onSubmit={handleUpload}>
            <Form.Label>Create album</Form.Label>
            <Form.Group controlId="formFile">
              <Form.Control 
                multiple
                type="file" 
                onChange={handleFileChange}
                accept='image/*,.png,.jpg,.gif,.web'
              />
            </Form.Group> 
            <input maxLength='9' name="albumName" placeholder="create album name" value={albumName} onChange={handleAlbumNameChange}/>
            <input maxLength='30' name="albumDesc" placeholder="create album description" value={albumDesc} onChange={handleAlbumDescChange}/>  
            <Button className="btn btn-secondary" type="submit">Add</Button>
          </Form>
    
        </ModalBody>
      </Modal>
    </>
    )}
    </>
  );
}


  export default CreatePhoto