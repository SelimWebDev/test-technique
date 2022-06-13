export function saveInDB(medias){
    fetch('api/saveInDB', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          medias: medias
      })
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
}