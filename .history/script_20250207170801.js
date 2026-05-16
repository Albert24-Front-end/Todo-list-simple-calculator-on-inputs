import { base } from './tasks.js';

const todoForm = document.querySelector('#form-todo');
const author = document.querySelector('#author');
const post = document.querySelector('#post');
const todoList = document.querySelector('.todo__list');

function addToDo(event) {
    event.preventDefault();

    const authorText = author.value;
    const postText = post.value;

  

    todoForm.reset();

    // event.target.closest('');
}

function createToDo(objToDo) {

}

function renderToDo () {
    base.todo.forEach(  (todo) => {
        todo.addEventListener()

        createToDo(todo);
    })
}

renderToDo();

todoForm.addEventListener('submit', addToDo);