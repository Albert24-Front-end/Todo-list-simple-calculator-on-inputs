export const base = {
    employee: "",
    todo: [
        {
            id: "td1",
            author: "Макс",
            post: "Составить промо-текст",
            ready: false,
        },
        {
            id: "td2",
            author: "Катя",
            post: "Найти локацию для съемки промо-видео",
            ready: true,
        },
    ],
    check(id) {
        for (let i = 0; i < base.todo.length; i++) {
            base.todo[i].id === id;
            base.todo[i].ready = true;
        }
        console.log(id);
        console.log(rea)
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