const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const todo_list = []

function createTodoList(todo_list) {
    for (let i = 0; i < todo_list.length; i++) {
        const todo = document.createElement('li');
        todo.innerText = todo_list[i];
        todos.appendChild(todo);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
        const todo = document.createElement('li');
        todo.innerText = input.value;
        todos.appendChild(todo);        
        input.value = '';
        todo.addEventListener('click', () => todo.classList.toggle('completed'))
        todo.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todo.remove();
        })
    }    
})
