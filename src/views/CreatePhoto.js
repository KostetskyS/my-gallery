import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CreatePhoto({ isAlbum }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

  const handleUpload = async (event) => {
    event.preventDefault(); 

    const formData = new FormData();

    formData.append('image', selectedFile);
    formData.append('title', 'albumName'); 
    // 

    const token = localStorage.getItem('authToken');
    const res = await fetch('http://localhost:8080/api/albums/create', {
      headers: {
        'Authorization' : 'Bearer ' + token
      },
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    setUploaded(data);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Form onSubmit={handleUpload}> 
        <Form.Group controlId="formFile">
        {isAlbum && <Form.Label>Upload album</Form.Label>}
        {!isAlbum && <Form.Label>Upload photo</Form.Label>}
          <Form.Control 
            multiple
            type="file" 
            onChange={handleFileChange}
            accept='image/*,.png,.jpg,.gif,.web'
          />
        </Form.Group>
        <Button className="btn btn-secondary" type="submit">Upload</Button>
        {isAlbum && <input placeholder="create album name"/>}
        {isAlbum && <input placeholder="create album description"/>}
        {!isAlbum && <input placeholder="create photo name"/>}
        {!isAlbum && <input placeholder="create photo description"/>}
        
      </Form>
      {uploaded && (
        <div>
          lastModifiedData: {''}
          <img alt='' src={uploaded.filePath} width='200'/>
        </div>
      )}
    </>
  );
}


  export default CreatePhoto