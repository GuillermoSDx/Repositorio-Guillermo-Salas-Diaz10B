// Detectar si podemos usar el Service Workers
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}
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
  
  // Agregar eventos de clic para las opciones del menú
  document.getElementById('opcion1').addEventListener('click', mostrarTodosIds);
  document.getElementById('opcion2').addEventListener('click', mostrarTodosIdsAndTitles);
  document.getElementById('opcion3').addEventListener('click', mostrarTodosUnresolved);
  