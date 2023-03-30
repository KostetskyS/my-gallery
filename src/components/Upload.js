import React from "react";
import { Form, Button } from "react-bootstrap";
function Upload({ onUpload }) {
    const handleUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    return (
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Загрузить фото</Form.Label>
          <Form.Control type="file" onChange={handleUpload} />
        </Form.Group>
        <Button className="btn btn-secondary" type="submit">Загрузить</Button>
      </Form>
    );
  }

  export default Upload