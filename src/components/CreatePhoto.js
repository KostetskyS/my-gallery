import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { customFetch } from "../helpers/customFetch";
import '../assets/style/imagesUpload.css';
function CreatePhoto({ isAlbum }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();
  const handleUpload = async (event) => {

    event.preventDefault(); 
    
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', 'albumName'); 
    // 
    const res = customFetch;
    const data = await res.json();

    setUploaded(data);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
     {isAlbum && (  
          <Form className="albums-form" onSubmit={handleUpload}> 
            <Form.Label>Create album</Form.Label>
            <input placeholder="create album name"/>
            <input placeholder="create album description"/>  
            <Button className="btn btn-secondary" type="submit">Add</Button>
          </Form>
     ) }
      {!isAlbum && (  
        <>  
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
        <input placeholder="create album name"/>
        <input placeholder="create album description"/>
        <Button className="btn btn-secondary" type="submit">Upload</Button>
      </Form>
        </>
      ) }
    
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