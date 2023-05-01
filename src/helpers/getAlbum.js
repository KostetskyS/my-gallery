import axios from "axios";

export const getAlbum = async (url) => {

  const token = localStorage.getItem('authToken');

  return await axios(`http://localhost:8080/api${url}`, {
    headers: {
      'Authorization' : 'Bearer ' + token,
    },
    method: 'GET',
  })

}
  
  