const form = document.querySelector('#Myform');
const MyInput = document.querySelector('input');
const ul = document.querySelector('#listToDo');

// Load todos from localStorage when the page loads
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to save todos to localStorage
function saveTodos() {
    const todos = Array.from(ul.querySelectorAll('li')).map(li => li.firstChild.textContent);
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const li = document.createElement('li');

    const text = document.createElement('span'); // Separate element for text content
    text.textContent = MyInput.value;
    li.appendChild(text);
    li.classList.add('new', 'todo');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Delete';
    addBtn.style.backgroundColor = 'red';
    li.appendChild(addBtn);

    ul.appendChild(li);
    MyInput.value = '';

    // addBtn.addEventListener('click', () => {
    //     li.remove();
    //     saveTodos();
    // });

    li.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove();
        } else {
            e.target.classList.toggle('completed');
        }
    });
    saveTodos(); // Save todos after adding a new todo
});

// Load saved todos onto the page
savedTodos.forEach(todoText => {
    const li = document.createElement('li');

    const text = document.createElement('span'); // Separate element for text content
    text.textContent = todoText;
    li.appendChild(text);
    li.classList.add('new', 'todo');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = 'red';
    li.appendChild(deleteBtn);

    ul.appendChild(li);

    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTodos();
    });
});
