// Función para publicar el logo oficial de la NFL
function publishNFLLogo(event) {
    // Publicar el logo de la NFL
    event.respondWith(
      fetch('img/logo.jpg'),
      console.log(event)
        .then(response => response.blob())
        .then(blob => new Response(blob, { headers: { 'Content-Type': 'image/jpeg' } }))
       
    );
  }
  
  // Función para publicar el ID de los pendientes con un símbolo especial
  function publishTodoIdWithSymbol(event) {
    // Obtener el ID del pendiente y agregar un símbolo especial
    const id = event.request.url.split('/').pop();
    const responseText = `ID del pendiente: ${id}!`;
  
    // Publicar la respuesta modificada
    event.respondWith(
      new Response(responseText, { headers: { 'Content-Type': 'text/plain' } })
    );
  }
  
  // Evento 'fetch' para interceptar solicitudes
  self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
  
    // Verificar si la solicitud es para la lista de pendientes
    if (requestUrl.pathname.includes('/todos')) {
      // Verificar si la solicitud es para una imagen
      if (requestUrl.pathname.endsWith('.jpg')) {
        // Publicar el logo de la NFL
        publishNFLLogo(event);
      } else {
        // Publicar el ID del pendiente con un símbolo especial
        publishTodoIdWithSymbol(event);
      }
    }
  });
  
  // Evento 'install' para instalar el service worker
  self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  // Evento 'activate' para activar el service worker
  self.addEventListener('activate', event => {
    console.log('Service Worker activado');
  });
  
  