import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo');
const author = document.querySelector('#author');
const post = document.querySelector('#post');
const todoList = document.querySelector('.todo__list');

function addToDo(event) {
    event.preventDefault();

    const authorText = author.value;
    const postText = post.value;

    const objToDo = base.addToDo( authorText, postText );

    const todoLi = createToDo(ob)

  

    todoForm.reset();

    // event.target.closest('');
}

function createToDo(objToDo) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo__list-item');

    todoItem.innerHTML = `
        <article class="post">
            <h3 class="post__author">${objToDo.author}</h3>
            <p class="post__todo">${objToDo.post}</p>
            <button class="post__ready" type="button">✔</button>
        </article>
    `;

   return todoItem;
};

function renderToDo () {
    for (let i = 0; i < base.todo.length; i++) {
        const toDoLi = createToDo(base.todo[i]);
        todoList.append(toDoLi);
    };
    
};

renderToDo();

todoForm.addEventListener('submit', addToDo);