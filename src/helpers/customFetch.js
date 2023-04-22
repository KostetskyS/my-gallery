export const customFetch = async(url, formData) => {
  
  const token = localStorage.getItem('authToken');
  
  return await fetch(`http://localhost:8080/api${url}`, {
      headers: {
        'Authorization' : 'Bearer ' + token
      },
      method: 'POST',
      body: formData,
    });
}
 

   