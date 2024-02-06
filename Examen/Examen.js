async function fetchTodos() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error('Error al obtener la lista', error);
        throw error;
    }
}

function ResultsTodoIds(todos) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const incompleteTodoId = incompleteTodos.map(todo => todo.id);
    Results('output', incompleteTodoId);
}

function ResultsTodoIdTitle(todos) {
    const outputDiv = document.getElementById('output2');
    outputDiv.innerHTML = '';
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const incompleteTodoInfo = incompleteTodos.map(todo => `(${todo.id}, ${todo.title})`);
    Results('output2', incompleteTodoInfo);
}

async function fetchTodoIdsTitlesUnresolved() {
    const todos = await fetchTodos();
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const incompleteTodoInfo = incompleteTodos.map(todo => `(${todo.id}, ${todo.title})`);
    Results('output3', incompleteTodoInfo);
}

async function fetchTodoIdsTitlesResolved() {
    const todos = await fetchTodos();
    const completedTodos = todos.filter(todo => todo.completed);
    const completedTodoInfo = completedTodos.map(todo => `(${todo.id}, ${todo.title})`);
    Results('output4', completedTodoInfo);
}

async function fetchTodoIdsUserIds() {
    const todos = await fetchTodos();
    const todoInfo = todos.map(todo => `(${todo.id}, ${todo.userId})`);
    Results('output5', todoInfo);
}

async function fetchTodoIdsUserIdsResolved() {
    const todos = await fetchTodos();
    const completedTodos = todos.filter(todo => todo.completed);
    const completedTodoInfo = completedTodos.map(todo => `(${todo.id}, ${todo.userId})`);
    Results('output6', completedTodoInfo);
}

async function fetchTodoIdsUserIdsUnresolved() {
    const todos = await fetchTodos();
    const incompleteTodos = todos.filter(todo => !todo.completed);
    const incompleteTodoInfo = incompleteTodos.map(todo => `(${todo.id}, ${todo.userId})`);
    Results('output7', incompleteTodoInfo);
}

function Results(elementId, results) {
    const outputDiv = document.getElementById(elementId);
    outputDiv.innerHTML = `<p>${results.join(', ')}</p>`;
    outputDiv.classList.remove('hidden');
}

function toggleInfo(elementId, fetchFunction) {
    const outputDiv = document.getElementById(elementId);
    outputDiv.classList.toggle('hidden');
    
    if (!outputDiv.classList.contains('hidden')) {
        // Llamar a la función correspondiente solo cuando se muestra la información
        if (fetchFunction === 'fetchTodoIds') {
            fetchTodoIds();
        } else if (fetchFunction === 'fetchTodoIdsTitles') {
            fetchTodoIdsTitles();
        } else if (fetchFunction === 'fetchTodoIdsTitlesUnresolved') {
            fetchTodoIdsTitlesUnresolved();
        } else if (fetchFunction === 'fetchTodoIdsTitlesResolved') {
            fetchTodoIdsTitlesResolved();
        } else if (fetchFunction === 'fetchTodoIdsUserIds') {
            fetchTodoIdsUserIds();
        } else if (fetchFunction === 'fetchTodoIdsUserIdsResolved') {
            fetchTodoIdsUserIdsResolved();
        } else if (fetchFunction === 'fetchTodoIdsUserIdsUnresolved') {
            fetchTodoIdsUserIdsUnresolved();
        }
    }
}

// Llamar a la función al cargar la página
async function fetchTodoIds() {
    const todos = await fetchTodos();
    ResultsTodoIds(todos);
}

async function fetchTodoIdsTitles() {
    const todos = await fetchTodos();
    ResultsTodoIdTitle(todos);
}
