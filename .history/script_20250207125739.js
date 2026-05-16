import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo')
const author = document.querySelector('#author');
const post = document.querySelector('#post');

function addToDo(event) {
    const authorText = author.value;
    const postText = post.value;
    console.log(authorText);
    console.log(pos)

    event.target.closest('');
}

todoForm.addEventListener('submit', addToDo);