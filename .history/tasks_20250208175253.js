import {}
export const base = {
    employee: "",
    todo: getToDoLS(),
    check(id) {
        for (let i = 0; i < base.todo.length; i++) {
            base.todo[i].id === id;
            base.todo[i].ready = true;
        }
        console.log(id);
    },
    addToDo( author, post ) {
        const todo = {
            id: 'td' + (base.todo.length + 1),
            author,
            post,
            ready: false,
        };
        base.todo.push(todo);
        return todo;;
    },
    // check & addToDo - методы объекта base
};