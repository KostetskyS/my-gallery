import axios from 'axios';

export const deleteItem = async (url, body) => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.post(`http://localhost:8080/api${url}`, body, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
