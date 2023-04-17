export const customFetch = async(url) => {
  
  const formData = new FormData();
  const token = localStorage.getItem('authToken');
  
  await fetch(`http://localhost:8080/api/${url}`, {
      headers: {
        'Authorization' : 'Bearer ' + token
      },
      method: 'POST',
      body: formData,
    });
}
 

   