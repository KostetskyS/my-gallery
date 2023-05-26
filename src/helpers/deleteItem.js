import axios from 'axios';

export const deleteItem = async (url, photoId) => {
  try {
    const token = localStorage.getItem('authToken');

    const response = await axios.post(`http://localhost:8080/api${url}`, {
      photo_id: photoId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
