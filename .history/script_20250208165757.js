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

    const todoLi = createToDo(objToDo);

    todoList.append(todoLi);

    todoForm.reset();
};

function createToDo(objToDo) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo__list-item');

    todoItem.innerHTML = `
         <article class="post ${objToDo.ready ? "post__complete" : ""}">
            <h3 class="post__author">${objToDo.author}</h3>
            <p class="post__todo">${objToDo.post}</p>
            ${!objToDo.ready ? `<button class="post__ready" type="button" data-id="${objToDo.id}">✔</button>` : ""}
        </article>
    `;

   return todoItem;
};

function renderToDo() {
    for (let i = 0; i < base.todo.length; i++) {
        const toDoLi = createToDo(base.todo[i]);
        todoList.append(toDoLi);
    };
};

function checkToDo(event) {
    const button = event.target.closest('.post__ready');
    if(button) {
        const post = button.closest('.post');
        post.classList.add('post__complete');
        button.remove();
        const id = button.dataset.id;
        base.check(id);
    }
    console.log(base.todo);
};

function getToDoLS() {
    
};

function setToDoLS() {
    localStorage.setItem
};

renderToDo();

todoForm.addEventListener('submit', addToDo);

todoList.addEventListener('click', checkToDo);