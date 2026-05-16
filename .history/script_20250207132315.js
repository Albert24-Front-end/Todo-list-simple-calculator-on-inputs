import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo');
const author = document.querySelector('#author');
const post = document.querySelector('#post');
const todoList = document.querySelector('#todo__list');

function addToDo(event) {
    event.preventDefault();
    const authorText = author.value;
    const postText = post.value;

    const todoItem =  `
        <article class="post">
            <h3 class="post__author">${authorText}</h3>
            <p class="post__todo">${postText}</p>
            <button class="post__ready" type="button">✔</button>
        </article>
    `;

    const li = document.createElement('li');
    li.classList.add('todo__list-item');

    li.innerHTML = todoItem;

    todoList.append(li);

    // console.log(todoItem);

    // console.log(authorText);
    // console.log(postText);

    // event.target.closest('');
}

todoForm.addEventListener('submit', addToDo);