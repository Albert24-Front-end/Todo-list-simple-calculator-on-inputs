import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo');
const author = document.querySelector('#author');
const post = document.querySelector('#post');
const todoList = document.querySelector('.todo__list');

function addToDo(event) {
    event.preventDefault();

    const authorText = author.value;
    const postText = post.value;

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo__list-item');

    todoItem.innerHTML = `
        <article class="post">
            <h3 class="post__author">${authorText}</h3>
            <p class="post__todo">${postText}</p>
            <button class="post__ready" type="button">✔</button>
        </article>
    `;

    todoList.append(todoItem);

    todoForm.reset();

    // event.target.closest('');
}

function renderToDo () {
    base.todo.forEach((todo)=> {
        
    })
}

todoForm.addEventListener('submit', addToDo);