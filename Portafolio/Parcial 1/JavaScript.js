
// Definir una función llamada Foo que toma dos parámetros e imprime su suma
function Foo(a, b) {
    const sum = a + b;
    console.log(`La suma de ${a} y ${b} es: ${sum}`);
}

// Ejemplo de uso de la función Foo
Foo(3, 7);
// Salida esperada: La suma de 3 y 7 es: 10


// Definir la URL de la API

// Realizar una solicitud GET utilizando Fetch
fetch(url)
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(data => {
        // Imprimir los primeros cinco títulos de los posts
        for (let i = 0; i < 5; i++) {
            const title = data[i].title;
            console.log(`Post ${i + 1}: ${title}`);
        }
    })
    .catch(error => {
        // Manejar errores en la solicitud
        console.error('Error fetching data:', error);
    });


// Definir la URL de la API
var url ='https://jsonplaceholder.typicode.com/albums';

// Realizar una solicitud GET utilizando Fetch
fetch(url)
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(response => {
        // Iterar a través de cada elemento en la respuesta
        response.forEach(element => {
            // Extraer propiedades del elemento
            const { id, title, userId } = element;
            
            // Imprimir información en la consola
            console.log(`ID: ${id} -- Title: ${title} -- UserId: ${userId}`);
        });
    })
    .catch(error => {
        // Manejar errores en la solicitud
        console.error('Error fetching data:', error);
    });

// Definir la URL de la API
var url ='https://jsonplaceholder.typicode.com/albums';

// Realizar una solicitud GET utilizando Fetch
fetch(url)
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(response => {
        // Iterar a través de cada elemento en la respuesta
        response.forEach(element => {
            // Extraer propiedades del elemento
            const { id, title, userId } = element;
            
            // Imprimir información en la consola
            console.log(`ID: ${id} -- Title: ${title} -- UserId: ${userId}`);
        });
    })
    .catch(error => {
        // Manejar errores en la solicitud
        console.error('Error fetching data:', error);
    });


//npm install axios
const url = 'https://jsonplaceholder.typicode.com/albums';

axios.get(url)
    .then(response => {
        response.data.forEach(element => {
            const { id, title, userId } = element;
            console.log(`ID: ${id} -- Title: ${title} -- UserId: ${userId}`);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    const axios = require('axios');

    const url = 'https://jsonplaceholder.typicode.com/albums';
    const albumIdToUpdate = 1;  // ID del álbum que deseas actualizar
    
    // Datos que deseas actualizar
    const updatedData = {
        title: 'Nuevo título',
        userId: 123
    };
    
    axios.put(`${url}/${albumIdToUpdate}`, updatedData)
        .then(response => {
            console.log('Álbum actualizado con éxito:', response.data);
        })
        .catch(error => {
            console.error('Error al actualizar el álbum:', error);
        });
    