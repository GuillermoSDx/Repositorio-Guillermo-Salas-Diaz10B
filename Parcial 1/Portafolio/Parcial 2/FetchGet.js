fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    /*El código de estado HTTP no está en el rango 200-299 */
    if (!response.ok) {
      throw new Error('La respuesta no fue ok');
    }
    /*Si si fue ok, entonces nos regresa la respuesta del json. */
    return response.json();
  })
  .then(data => {
    const primerPokemon = data.results[0];
    console.log('Primer Pokémon:', primerPokemon);

    // Mostrar el nombre del primer Pokémon en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = `Primer Pokémon: ${primerPokemon.name}`;

  })
  .catch(error => {
    console.error('Tuvo un problema mid fetch:', error);
  });

// Segunda solicitud fetch POST
  fetch('https://ejemploApiPost.com/api/data', {
    method: 'POST',
    body: JSON.stringify({ key: 'value' }),
    headers: {
        'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta no fue ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta del POST:', data);
  })
  .catch(error => {
    console.error('Tuvo un problema mifetch POST:', error);
  });

// Fetch con BLOB
  fetch('https://blobja.com/image.mp3')
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta no fue ok');
    }
    return response.blob();
  })
  /*Blob (Binary Large Object) 
  representa datos binarios brutos y puede contener cualquier tipo de datos, 
  como imágenes, archivos, audio, video, etc.*/ 
  .then(blob => {
    // Aquí puedes usar el objeto Blob, por ejemplo, para mostrar una imagen
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(error => {
    console.error('Alg estuvo mal en el fetch:', error);
  });

  //Response clone
  fetch('https://apiCualquiera.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta no fue ok');
    }
    const originalResponse = response.clone(); // clonar la respuesta
    return response.json(); //  respuesta original
  })
  .then(data => {
    console.log('Datos:', data);
  
    // Podemos utilizar la resp originla
  })
  .catch(error => {
    console.error('Alg estuvo mal en el fetch:', error);
  });
