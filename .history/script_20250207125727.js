import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo')
const author = document.querySelector('#author');
const post = document.querySelector('#post');

function addToDo(event) {
    const authorText = author.value;
    const postText = post.value;
    console.log(a)

    event.target.closest('');
}

todoForm.addEventListener('submit', addToDo);