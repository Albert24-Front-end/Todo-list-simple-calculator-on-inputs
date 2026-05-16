import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo');
const author = document.querySelector('#author');
const post = document.querySelector('#post');
const todoList = document.querySelector('#todo__list');

function addToDo(event) {
    event.preventDefault();
    const authorText = author.value;
    const postText = post.value;

    const todoItem = document.createElement
    console.log(authorText);
    console.log(postText);

    event.target.closest('');
}

todoForm.addEventListener('submit', addToDo);