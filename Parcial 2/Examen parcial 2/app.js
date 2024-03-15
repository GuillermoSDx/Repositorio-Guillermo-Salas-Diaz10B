
// Detectar si podemos usar el Service Workers
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}

self.addEventListener('install', event => {
  console.log("Instalando SW");

  const instalacion = new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("SW: Instalación finalizada");
          self.skipWaiting();
          resolve();
      }, 100);
  });

  event.waitUntil(instalacion);
});


self.addEventListener('activate', event=>{
  console.log("SW activado");
})
// Función para mostrar la lista de todos los pendientes (solo IDs)
function mostrarTodosIds() {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const todosIds = data.map(todo => todo.id);
        document.getElementById('info').innerText = `Todos los pendientes (solo IDs): ${todosIds.join(', ')}`;
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }
  
  // Función para mostrar la lista de todos los pendientes (IDs y títulos)
  function mostrarTodosIdsAndTitles() {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const todosIdsAndTitles = data.map(todo => `${todo.id}: ${todo.title}`);
        document.getElementById('info').innerText = `Todos los pendientes (IDs y títulos):\n${todosIdsAndTitles.join('\n')}`;
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }
  
  // Función para mostrar la lista de todos los pendientes sin resolver (ID y título)
  function mostrarTodosUnresolved() {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const unresolvedTodos = data.filter(todo => !todo.completed);
        const unresolvedTodosIdsAndTitles = unresolvedTodos.map(todo => `${todo.id}: ${todo.title}`);
        document.getElementById('info').innerText = `Pendientes sin resolver (IDs y títulos):\n${unresolvedTodosIdsAndTitles.join('\n')}`;
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }
  // Función para mostrar la lista de todos los pendientes resueltos (ID y Title)
function mostrarTodosResueltos() {
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const resolvedTodosIdsAndTitles = data.filter(todo => todo.completed).map(todo => `${todo.id}: ${todo.title}`);
      document.getElementById('info').innerText = `Pendientes resueltos (IDs y títulos):\n${resolvedTodosIdsAndTitles.join('\n')}`;
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

// Función para mostrar la lista de todos los pendientes (IDs y userlD)
function mostrarTodosIdsAndUserId() {
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const todosIdsAndUserId = data.map(todo => `${todo.id}: ${todo.userId}`);
      document.getElementById('info').innerText = `Todos los pendientes (IDs y userID):\n${todosIdsAndUserId.join('\n')}`;
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

// Función para mostrar la lista de los pendientes resueltos (ID Y JASIIP)
function mostrarPendientesResueltos() {
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const resolvedTodosIdsAndJASIIP = data.filter(todo => todo.completed).map(todo => `${todo.id}: ${todo.userId}`);
      document.getElementById('info').innerText = `Pendientes resueltos (IDs y JASIIP):\n${resolvedTodosIdsAndJASIIP.join('\n')}`;
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

// Función para mostrar la lista de todos los pendientes sin resolver (ID y Tittle)
function mostrarTodosSinResolver() {
  fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      const unresolvedTodosIdsAndTitles = data.filter(todo => !todo.completed).map(todo => `${todo.id}: ${todo.title}`);
      document.getElementById('info').innerText = `Pendientes sin resolver (IDs y títulos):\n${unresolvedTodosIdsAndTitles.join('\n')}`;
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

  
  // Agregar eventos de clic para las opciones del menú
  document.addEventListener('DOMContentLoaded', function() {
    // Agregar eventos de clic para las opciones del menú
    document.getElementById('opcion1').addEventListener('click', mostrarTodosIds);
    document.getElementById('opcion2').addEventListener('click', mostrarTodosIdsAndTitles);
    document.getElementById('opcion3').addEventListener('click', mostrarTodosUnresolved);
    document.getElementById('opcion4').addEventListener('click', mostrarTodosResueltos);
    document.getElementById('opcion5').addEventListener('click', mostrarTodosIdsAndUserId);
    document.getElementById('opcion6').addEventListener('click', mostrarPendientesResueltos);
    document.getElementById('opcion7').addEventListener('click', mostrarTodosSinResolver);
});