function getToDoLS() {
    const savedTodos = localStorage.getItem('todo');
    return savedTodos ? JSON.parse(savedTodos) : [];
};

export function setToDoLS() {
    localStorage.setItem('todo', JSON.stringify(base.todo));
};

export const base = {
    employee: "",
    todo: getToDoLS(),
    check(id) {
        for (let i = 0; i < base.todo.length; i++) {
            if(base.todo[i].id === id) {
                base.todo[i].ready = true;
            }
        }
        console.log(id);
    },
    addToDo( author, post ) {
        const todo = {
            id: 'td' + Date.now(),
            author,
            post,
            ready: false,
        };
        base.todo.push(todo);
        return todo;
    },
    // check & addToDo - методы объекта base
};
