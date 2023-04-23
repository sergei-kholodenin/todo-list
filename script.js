const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const todo_list = JSON.parse(localStorage.getItem('todos'));

if (todo_list) {
    createTodoList(todo_list);
}

function createTodoList(todo_list) {
    todo_list.forEach(item => {
        const todo = document.createElement('li');
        todo.innerText = item.text;
        if (item.completed === true) {
            todo.classList.add('completed');
        }
        todos.appendChild(todo);
        todo.addEventListener('click', () => {todo.classList.toggle('completed'); updateLS();})
        todo.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todo.remove();
            updateLS();
        })
    })
}

function updateLS() {
    const todoEls = document.querySelectorAll('li');
    const todoAll = [];
    todoEls.forEach(el => {
        const todo = {
            text: el.innerText,
            completed: el.className ==='completed' ? true : false 
        }
        todoAll.push(todo);
    })
    localStorage.setItem('todos', JSON.stringify(todoAll));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
        const todo = document.createElement('li');
        todo.innerText = input.value;
        todos.appendChild(todo);        
        input.value = '';
        updateLS();
        todo.addEventListener('click', () => {todo.classList.toggle('completed'); updateLS();})
        todo.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todo.remove();
            updateLS();
        })
    }    
})
